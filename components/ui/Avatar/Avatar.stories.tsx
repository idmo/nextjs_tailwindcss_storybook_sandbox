import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "@/components/UI/Avatar/Avatar";

export default {
  title: "UI/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "small",
  children: "Small",
};
