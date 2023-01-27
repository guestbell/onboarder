import Button from "@mui/material/Button";
import * as React from "react";
import Onboarder, { Steps, Structure } from "../..";
import FancyStepContainer, {
  ExtraStepProps,
} from "./stepContainer/FancyStepContainer";

export interface FancyProps {
  debug?: boolean;
}

type OnboarderState = {
  firstStep: never;
  loopStep: { counter: number; isDirty: boolean; errorMessage?: string };
  afterLoopStep: never;
  textStep: { message: string };
  finalStep: never;
};

const steps: Steps<OnboarderState, ExtraStepProps> = {
  firstStep: {
    Component: ({ goToNextStep }) => (
      <>
        First step<Button onClick={goToNextStep}>Get started</Button>
      </>
    ),
    title: "First step",
    hideUi: true,
  },
  loopStep: {
    Component: ({ setState, state }) => (
      <>
        <div>Loop step</div>
        {state.errorMessage && <div>Error: {state.errorMessage}</div>}
        <button
          onClick={() =>
            setState({ ...state, counter: state.counter + 1, isDirty: true })
          }
        >
          {state.counter.toString()}
        </button>
      </>
    ),
    initialState: {
      counter: 0,
      isDirty: false,
    },
    afterNext: ({ state, setState }) => {
      setState({ ...state, isDirty: false, errorMessage: undefined });
    },
    beforeNext: ({ state, setState }) => {
      if (state.counter < 2) {
        setState({
          ...state,
          errorMessage: "Increment to at least 2 because rules",
        });
        return false;
      }
      return true;
    },
    title: "Loop step",
  },
  afterLoopStep: {
    title: "After loop step",
    Component: ({ nextStep }) => (
      <>{nextStep === "loopStep" ? "We are looping" : "We're done looping."}</>
    ),
  },
  textStep: {
    title: "Text step",
    Component: ({ setState, state }) => (
      <>
        <input
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        />
        <br />
        Message: {state.message}
      </>
    ),
    initialState: {
      message: "",
    },
  },
  finalStep: {
    title: "Final step",
    Component: () => <>All done!!!</>,
  },
};

const finalSteps: (keyof OnboarderState)[] = ["finalStep"];

const structure: Structure<OnboarderState> = {
  firstStep: () => ({ loopStep: 1 }),
  loopStep: (state) => ({ afterLoopStep: state.loopStep.isDirty ? 1 : null }),
  afterLoopStep: (state) => ({
    loopStep: state.loopStep?.counter < 3 ? 1 : null,
    textStep: state.loopStep?.counter >= 3 ? 1 : null,
  }),
  textStep: (state) => ({
    finalStep: (state.textStep?.message && 1) || null,
  }),
};

export const Fancy: React.FC<FancyProps> = ({ debug }) => {
  return (
    <Onboarder
      steps={steps}
      initialStep="firstStep"
      finalSteps={finalSteps}
      structure={structure}
      StepContainer={FancyStepContainer}
      debug={debug}
    />
  );
};

export default Fancy;
