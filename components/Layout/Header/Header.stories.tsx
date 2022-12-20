import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "@/components/Layout/Header";

export default {
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Header"',
};
