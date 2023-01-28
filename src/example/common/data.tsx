import React from "react";
import { Steps, Structure } from "../..";

export type ExampleOnboarderState = {
  firstStep: never;
  loopStep: { counter: number; isDirty: boolean; errorMessage?: string };
  afterLoopStep: never;
  textStep: { message: string };
  finalStep: never;
};

export const exampleSteps: Steps<ExampleOnboarderState> = {
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

export const exampleStructure: Structure<ExampleOnboarderState> = {
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

export const exampleFinalSteps: (keyof ExampleOnboarderState)[] = ["finalStep"];
