import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HStack } from "./HStack";

export default {
  title: "UI/HStack",
  component: HStack,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof HStack>;

const Template: ComponentStory<typeof HStack> = (args) => <HStack {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div>Horizontal</div>
      <div>Horizontal</div>
      <div>Horizontal</div>
      <div>Horizontal</div>
      <div>Horizontal</div>
      <div>Horizontal</div>
    </>
  ),
};
