import type { Meta, StoryFn } from "@storybook/react";

import type { ButtonGroupProps } from "./ButtonGroup";
import { ButtonGroup } from "./ButtonGroup";

const meta: Meta = {
  title: "Sandbox/Button Group",
  component: ButtonGroup,
  parameters: {},
};

export default meta;

const Template: StoryFn<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Basic = Template.bind({});

Basic.args = {};
Basic.storyName = "Button Group";
