import * as React from "react";

export type StepContainerComponentProps<TState extends {}> = {
  currentStep: keyof TState;
  goToStep: (step: keyof TState) => void;
  hasNextStep: boolean;
  goToNextStep: () => void;
  hasPreviousStep: boolean;
  goToPreviousStep: () => void;
  nextStep: keyof TState | undefined;
  reset: () => void;
};

export type StepContainerComponent<TState extends {}> = React.ComponentType<
  StepContainerComponentProps<TState>
>;

export interface StepContainerProps {}

function StepContainer<TState extends {}>(
  props: React.PropsWithChildren<StepContainerComponentProps<TState>>
) {
  const {
    children,
    goToNextStep,
    hasNextStep,
    goToPreviousStep,
    hasPreviousStep,
    reset,
  } = props;
  return (
    <div>
      {children}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={reset}>Reset</button>
        <button onClick={goToPreviousStep} disabled={!hasPreviousStep}>
          Previous
        </button>
        <button onClick={goToNextStep} disabled={!hasNextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepContainer;
