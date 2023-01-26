import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Example } from "./Example";

export default {
  title: "Example",
  component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Debug = Template.bind({});
Debug.args = { debug: true };
