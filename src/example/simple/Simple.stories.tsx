import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Simple } from "./Simple";

export default {
  title: "Simple",
  component: Simple,
} as ComponentMeta<typeof Simple>;

const Template: ComponentStory<typeof Simple> = (args) => <Simple {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Debug = Template.bind({});
Debug.args = { debug: true };
