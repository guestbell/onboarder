import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Fancy } from "./Fancy";

export default {
  title: "Fancy",
  component: Fancy,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Fancy>;

const Template: ComponentStory<typeof Fancy> = (args) => <Fancy {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Debug = Template.bind({});
Debug.args = { debug: true };
