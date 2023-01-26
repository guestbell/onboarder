import * as React from "react";
import Onboarder, { Steps, Structure } from "../components/onboarder/Onboarder";
import StepContainer from "./stepContainer/StepContainer";

export interface ExampleProps {
  debug?: boolean;
}

type OnboarderState = {
  firstStep: never;
  loopStep: { counter: number; isDirty: boolean; errorMessage?: string };
  afterLoopStep: never;
  textStep: { message: string };
  finalStep: never;
};

const steps: Steps<OnboarderState> = {
  firstStep: { Component: () => <>First step</> },
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
  },
  afterLoopStep: {
    Component: ({ nextStep }) => (
      <>{nextStep === "loopStep" ? "We are looping" : "We're done looping."}</>
    ),
  },
  textStep: {
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
    Component: () => <>All done!!!</>,
  },
};

const structure: Structure<OnboarderState> = {
  firstStep: {
    nextStep: "loopStep",
  },
  loopStep: {
    nextStep: (state) => (state.loopStep.isDirty ? "afterLoopStep" : undefined),
  },
  afterLoopStep: {
    nextStep: (state) =>
      state.loopStep?.counter < 3 ? "loopStep" : "textStep",
  },
  textStep: {
    nextStep: (state) => (state.textStep?.message ? "finalStep" : undefined),
  },
};

export const Example: React.FC<ExampleProps> = ({ debug }) => {
  return (
    <Onboarder
      steps={steps}
      initialStep="firstStep"
      finalStep="finalStep"
      structure={structure}
      StepContainer={StepContainer}
      debug={debug}
    />
  );
};

export default Example;
