import * as React from "react";
import Onboarder, { Steps, Structure } from "../..";
import {
  exampleFinalSteps,
  ExampleOnboarderState,
  exampleSteps,
  exampleStructure,
} from "../common/data";
import SimpleStepContainer from "./stepContainer/SimpleStepContainer";

export interface SimpleProps {
  debug?: boolean;
}

export const Simple: React.FC<SimpleProps> = ({ debug }) => {
  return (
    <Onboarder<ExampleOnboarderState>
      steps={exampleSteps}
      initialStep="firstStep"
      finalSteps={exampleFinalSteps}
      structure={exampleStructure}
      StepContainer={SimpleStepContainer}
      debug={debug}
    />
  );
};

export default Simple;
