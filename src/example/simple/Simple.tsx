import * as React from "react";
import { Steps, Structure, Onboarder } from "../..";
import SimpleStepContainer from "./stepContainer/SimpleStepContainer";

export interface SimpleProps {
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
  firstStep: () => ({ loopStep: 1 }),
  loopStep: (state) => ({
    afterLoopStep: state.loopStep.isDirty ? 1 : undefined,
  }),
  afterLoopStep: (state) => ({
    loopStep: state.loopStep?.counter < 3 ? 1 : undefined,
    textStep: state.loopStep?.counter >= 3 ? 1 : undefined,
  }),
  textStep: (state) => ({
    finalStep: (state.textStep?.message && 1) || undefined,
  }),
};

const finalSteps: (keyof OnboarderState)[] = ["finalStep"];

export const Simple: React.FC<SimpleProps> = ({ debug }) => {
  return (
    <Onboarder
      steps={steps}
      initialStep="firstStep"
      finalSteps={finalSteps}
      structure={structure}
      StepContainer={SimpleStepContainer}
      debug={debug}
    />
  );
};

export default Simple;
