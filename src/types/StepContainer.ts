import { Steps } from "./Step";

export type StepContainerComponentProps<
  TState extends {},
  TExtraStepProps extends {} = {},
  TExtraStepContainerProps extends {} = {}
> = TExtraStepContainerProps & {
  currentStep: keyof TState;
  goToStep: (step: keyof TState) => void;
  hasNextStep: boolean;
  goToNextStep: () => void;
  hasUndoStep: boolean;
  goToUndoStep: () => void;
  hasRedoStep: boolean;
  goToRedoStep: () => void;
  nextStep: keyof TState | undefined;
  reset: () => void;
  steps: Steps<TState, TExtraStepProps>;
  journey: (keyof TState)[];
  journeyPosition: number;
  initialStep: keyof TState;
  finalSteps: (keyof TState)[];
  shortestStepsRemaining: number;
  shortestRemainingJourney: (keyof TState)[];
  remainingTimeSec: number;
};

export type StepContainerComponent<
  TState extends {},
  TExtraStepProps extends {} = {},
  TExtraStepContainerProps extends {} = {}
> = React.ComponentType<
  StepContainerComponentProps<TState, TExtraStepProps, TExtraStepContainerProps>
>;
