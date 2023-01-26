import {
  StepContainerComponent,
  StepContainerComponentProps,
} from "../../components/stepContainer/StepContainer";
import * as React from "react";
import { MainContextProvider } from "../../context/MainContext";
import JSONDebugger from "../../components/debug/JSONDebugger";

export type StepComponentProps<TState extends {}, TStepState> =
  StepContainerComponentProps<TState> & {
    state: TStepState;
    setState: (state: TStepState) => void;
  };

export type StepComponent<TState extends {}, TStepState> = React.ComponentType<
  StepComponentProps<TState, TStepState>
>;

export type HookConfig<TState extends {}, TStepState> = {
  state: TStepState;
  setState: (state: TStepState) => void;
};

export type HookType<TState extends {}, TStepState> = (
  config: HookConfig<TState, TStepState>
) => void;

export type Step<TState extends {}, TStepState> = {
  Component: StepComponent<TState, TStepState>;
  initialState?: TStepState;
  afterNext?: HookType<TState, TStepState>;
};

export type Steps<TState extends {}> = {
  [key in keyof TState]: Step<TState, TState[key]>;
};

export type NextStepFunc<TState extends {}> = (
  state: TState
) => keyof TState | undefined;

export type NextStepType<TState extends {}> =
  | string
  | NextStepFunc<TState>
  | undefined;

export type StructureItem<TState extends {}> = {
  nextStep: NextStepType<TState>;
};

export type Structure<TState extends {}> = {
  [key in keyof TState]?: StructureItem<TState>;
};

export interface OnboarderProps<TState extends {}> {
  steps: Steps<TState>;
  initialStep: keyof TState;
  finalStep: keyof TState;
  structure: Structure<TState>;
  StepContainer?: StepContainerComponent<TState>;
  // to be removed
  debug?: boolean;
}

type Setters<T> = {
  [P in keyof T]-?: T[P];
};

export type ResetAction = { type: "reset"; value: never };

export function Onboarder<TState extends {}>(props: OnboarderProps<TState>) {
  const { steps, initialStep, structure, StepContainer, debug = false } = props;
  const [currentStep, setCurrentStep] = React.useState(initialStep);
  const [journey, setJourney] = React.useState<(keyof TState)[]>([initialStep]);
  const [journeyPosition, setJourneyPosition] = React.useState(0);
  type ItemSetters = Setters<TState>;
  type ActionsMap = {
    [S in keyof ItemSetters]: {
      type: S;
      value: ItemSetters[S];
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
      if (Object.keys(state).some((s) => s === action.type)) {
        return { ...state, [action.type]: action.value };
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
  const setState = React.useCallback(
    (_state: TState[typeof currentStep]) =>
      dispatch({ type: currentStep, value: _state }),
    [currentStep]
  );
  const nextStep = structure?.[currentStep]?.nextStep;
  const interpolatedNextStep = nextStep
    ? typeof nextStep === "string"
      ? (nextStep as keyof TState)
      : nextStep(state)
    : undefined;
  const hasNextStep = Boolean(interpolatedNextStep);
  const goToNextStep = React.useCallback(() => {
    if (interpolatedNextStep) {
      setCurrentStep(interpolatedNextStep);
      setJourneyPosition(journeyPosition + 1);
      setJourney(
        journey.slice(0, journeyPosition + 1).concat(interpolatedNextStep)
      );
      currentStepInstance?.afterNext?.({
        state: selectedState,
        setState: setState,
      });
    }
  }, [
    interpolatedNextStep,
    currentStepInstance?.afterNext,
    selectedState,
    setState,
  ]);
  const hasPreviousStep = journeyPosition > 0;
  const goToPreviousStep = React.useCallback(() => {
    if (hasPreviousStep) {
      setJourneyPosition(journeyPosition - 1);
      setCurrentStep(journey[journeyPosition - 1]);
    }
  }, [journey, journeyPosition]);
  const reset = React.useCallback(() => {
    setCurrentStep(initialStep);
    setJourneyPosition(0);
    setJourney([initialStep]);
  }, [initialStep]);
  const StepContainerFinal = StepContainer ?? React.Fragment;
  const sharedProps = {
    currentStep,
    setCurrentStep,
    hasNextStep,
    nextStep: interpolatedNextStep,
    goToNextStep,
    reset,
    hasPreviousStep,
    goToPreviousStep,
  };
  return (
    <MainContextProvider value={state}>
      <StepContainerFinal {...sharedProps}>
        <CurrentComponent
          state={state[currentStep]}
          setState={setState}
          {...sharedProps}
        />
      </StepContainerFinal>
      {debug && (
        <JSONDebugger
          value={{
            journey,
            journeyPosition,
            currentStep,
            state,
            nextStep: interpolatedNextStep,
          }}
        />
      )}
    </MainContextProvider>
  );
}

export default Onboarder;
