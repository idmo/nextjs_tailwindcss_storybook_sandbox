import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "@ui/Avatar";

export default {
  title: "UI/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  intent: "small",
  children: "Small",
};

export const Medium = Template.bind({});
Medium.args = {
  intent: "medium",
  children: "Medium",
};

export const Large = Template.bind({});
Large.args = {
  intent: "large",
  children: "Large",
};
