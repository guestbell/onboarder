import {
  StepContainerComponent,
  StepContainerComponentProps,
} from "../../types/StepContainer";
import * as React from "react";
import { StateContextProvider } from "../../context/StateContext";
import JSONDebugger from "../../components/debug/JSONDebugger";
import { SetState, Steps } from "../../types/Step";
import { Structure } from "../../types/Structure";
import { findShortestPathMultipleEndNodes, Graph } from "../../utils/dijkstra";

export type OnboarderProps<
  TState extends {},
  TExtraStepProps extends {} = {},
  TExtraStepContainerProps extends {} = {}
> = {
  steps: Steps<TState, TExtraStepProps>;
  initialStep: keyof TState;
  finalSteps: (keyof TState)[];
  structure?: Structure<TState>;
  StepContainer?: StepContainerComponent<
    TState,
    TExtraStepProps,
    TExtraStepContainerProps
  >;
  // to be removed
  debug?: boolean;
};

export type ResetAction = { type: "reset"; value?: never };

const DefaultStepContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => <>{children}</>;

export function Onboarder<
  TState extends {} = {},
  TExtraStepProps extends {} = {},
  TExtraStepContainerProps extends {} = {}
>(
  props: OnboarderProps<TState, TExtraStepProps, TExtraStepContainerProps> &
    TExtraStepContainerProps
) {
  const {
    steps,
    initialStep,
    finalSteps,
    structure,
    StepContainer,
    debug = false,
    ...rest
  } = props;
  const [currentStep, setCurrentStep] = React.useState(initialStep);
  const [journey, setJourney] = React.useState<(keyof TState)[]>([initialStep]);
  const [journeyPosition, setJourneyPosition] = React.useState(0);
  type ActionsMap = {
    [S in keyof TState]: {
      type: S;
      value: SetState<TState[S]>;
    };
  };
  type ItemActions = ActionsMap[keyof ActionsMap] | ResetAction;
  const initialState = React.useMemo(
    () =>
      Object.keys(steps).reduce<TState>(
        (current, key) => ({
          ...current,
          [key]: steps[key as keyof TState].initialState ?? {},
        }),
        {} as TState
      ),
    [steps]
  );
  const [state, dispatch] = React.useReducer(
    (state: TState, action: ItemActions) => {
      if (
        (Object.keys(state) as (keyof TState)[]).some((s) => s === action.type)
      ) {
        const actionType = action.type as keyof TState;
        const handledState =
          action.value instanceof Function
            ? action.value(state[actionType])
            : action.value;
        return { ...state, [action.type]: handledState };
      } else if (action.type === "reset") {
        return initialState;
      }
      return state;
    },
    initialState
  );
  const selectedState = state[currentStep];
  const currentStepInstance = steps[currentStep];
  const CurrentComponent = currentStepInstance.Component;
  const setState = React.useCallback<SetState<any>>(
    (_state) => {
      dispatch({ type: currentStep, value: _state });
    },
    [currentStep]
  );
  const nextSteps: { [key in keyof TState]?: number } =
    structure?.[currentStep]?.(state) ?? {};
  const nextStepsKeys = (Object.keys(nextSteps) as (keyof TState)[]).filter(
    (a) => nextSteps[a] && nextSteps[a]! > 0
  );
  const nextStep = nextStepsKeys.length
    ? nextStepsKeys.reduce((a, b) => {
        if (!nextSteps[a]) {
          return b;
        }
        if (!nextSteps[b]) {
          return a;
        }
        return (nextSteps[a] ?? Infinity) > (nextSteps[b] ?? Infinity) ? b : a;
      })
    : undefined;

  const hasNextStep = Boolean(nextStep);
  const goToStep = React.useCallback(
    (step: keyof TState | undefined) => {
      if (step) {
        const possibleRet =
          currentStepInstance?.beforeNext?.({
            state: selectedState,
            setState,
          }) ?? true;
        Promise.resolve(possibleRet).then((ret) => {
          if (ret) {
            setJourneyPosition(journeyPosition + 1);
            setJourney(journey.slice(0, journeyPosition + 1).concat(step));
            setCurrentStep(step);
            currentStepInstance?.afterNext?.({
              state: selectedState,
              setState,
            });
          }
        });
      }
    },
    [currentStepInstance?.afterNext, selectedState, setState]
  );
  const goToNextStep = React.useCallback(
    () => goToStep(nextStep),
    [nextStep, goToStep]
  );
  const hasRedoStep = journeyPosition < journey.length - 1;
  const goToRedoStep = React.useCallback(() => {
    if (hasRedoStep) {
      setJourneyPosition(journeyPosition + 1);
      setCurrentStep(journey[journeyPosition + 1]);
    }
  }, [journey, journeyPosition]);
  const hasUndoStep = journeyPosition > 0;
  const goToUndoStep = React.useCallback(() => {
    if (hasUndoStep) {
      setJourneyPosition(journeyPosition - 1);
      setCurrentStep(journey[journeyPosition - 1]);
    }
  }, [journey, journeyPosition]);
  const reset = React.useCallback(() => {
    setCurrentStep(initialStep);
    setJourneyPosition(0);
    setJourney([initialStep]);
    dispatch({ type: "reset" });
  }, [initialStep]);
  const StepContainerFinal = StepContainer ?? DefaultStepContainer;
  const shortestPath = React.useMemo(
    () =>
      findShortestPathMultipleEndNodes(
        (Object.keys(structure ?? {}) as (keyof TState)[]).reduce(
          (prev, current) => {
            const val: { [key in keyof TState]?: number } =
              structure?.[current]?.(state) ?? {};

            return {
              ...prev,
              [current]: (Object.keys(val) as (keyof TState)[]).reduce(
                (prev, current) => ({
                  ...prev,
                  [current]: val[current] && Math.abs(val[current]!),
                }),
                {}
              ),
            };
          },
          {} as Graph<TState>
        ),
        journey[journey.length - 1],
        finalSteps
      ),
    [journey[journey.length - 1], finalSteps, structure, state]
  );
  const remainingTimeSec = React.useMemo(
    () =>
      shortestPath.path
        .map((p) => steps[p].timeRequiredSec ?? 0)
        .reduce((prev, current) => prev + current, 0),
    [shortestPath]
  );
  const sharedProps: StepContainerComponentProps<TState, TExtraStepProps> = {
    currentStep,
    hasNextStep,
    nextStep,
    goToNextStep,
    reset,
    hasUndoStep,
    goToUndoStep,
    hasRedoStep,
    goToRedoStep,
    goToStep,
    steps,
    journey,
    journeyPosition,
    initialStep,
    finalSteps,
    shortestStepsRemaining: shortestPath?.distance,
    shortestRemainingJourney: shortestPath.path,
    remainingTimeSec:
      remainingTimeSec + (currentStepInstance?.timeRequiredSec ?? 0),
  };
  return (
    <StateContextProvider value={state}>
      <StepContainerFinal
        {...sharedProps}
        {...(rest as unknown as TExtraStepContainerProps)}
      >
        <CurrentComponent
          state={state[currentStep]}
          setState={setState}
          {...sharedProps}
        />
      </StepContainerFinal>
      {debug && (
        <JSONDebugger
          value={{
            ...sharedProps,
            state,
          }}
        />
      )}
    </StateContextProvider>
  );
}

export default Onboarder;
