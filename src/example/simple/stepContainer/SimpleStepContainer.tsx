import * as React from "react";
import { StepContainerComponentProps } from "../../../types/StepContainer";

export interface StepContainerProps {}

function SimpleStepContainer<TState extends {}>(
  props: React.PropsWithChildren<StepContainerComponentProps<TState>>
) {
  const {
    children,
    goToNextStep,
    hasNextStep,
    goToUndoStep,
    hasUndoStep,
    hasRedoStep,
    goToRedoStep,
    reset,
  } = props;
  return (
    <div>
      {children}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={reset}>Reset</button>
        <button onClick={goToUndoStep} disabled={!hasUndoStep}>
          Previous
        </button>
        <button onClick={goToRedoStep} disabled={!hasRedoStep}>
          Next
        </button>
        <button onClick={goToNextStep} disabled={!hasNextStep}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default SimpleStepContainer;
