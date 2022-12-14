import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@/components/UI/Button/Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  children: "Medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Large",
};

export const Danger = Template.bind({});
Danger.args = {
  size: "large",
  intent: "danger",
  children: <span>Danger</span>,
};

export const Navigation = Template.bind({});
Navigation.args = {
  size: "small",
  intent: "navigation",
  children: <span>Menu Item</span>,
};

export const WithStatus = Template.bind({});
WithStatus.args = {
  size: "small",
  children: (
    <div className="flex flex-row items-center justify-between">
      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
      <span className="px-2">Button</span>
    </div>
  ),
};
