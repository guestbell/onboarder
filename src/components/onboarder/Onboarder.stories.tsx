import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Onboarder } from "./Onboarder";
import {
  exampleFinalSteps,
  ExampleOnboarderState,
  exampleSteps,
  exampleStructure,
} from "../../example/common/data";
import SimpleStepContainer from "../../example/simple/stepContainer/SimpleStepContainer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Onboarder",
  component: Onboarder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Onboarder>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Onboarder<ExampleOnboarderState>> = (args) => (
  <Onboarder {...args} />
);

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  steps: exampleSteps,
  initialStep: "firstStep",
  structure: exampleStructure,
  finalSteps: exampleFinalSteps,
  StepContainer: SimpleStepContainer
};
