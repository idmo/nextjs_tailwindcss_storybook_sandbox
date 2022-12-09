import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box } from "@ui/Box";

export default {
  title: "UI/Box",
  component: Box,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  intent: "default",
  fullWidth: false,
  children: <div>{"foo"}s</div>,
};

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
  fullWidth: false,
  children: "Hello",
};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: "secondary",
  fullWidth: true,
  children: "Secondary",
};
