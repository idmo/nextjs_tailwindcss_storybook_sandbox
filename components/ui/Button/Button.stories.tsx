import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@/components/UI/Button/Button";

export default {
  title: "UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: "Button",
};
