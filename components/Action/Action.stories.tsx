import type { Meta, StoryFn } from "@storybook/react";

import type { ActionProps } from "./Action";
import { Action } from "./Action";

const meta: Meta = {
  title: "Sandbox/Action",
  component: Action,
  parameters: {},
};

export default meta;

const Template: StoryFn<ActionProps> = (args) => <Action {...args} />;

export const Basic = Template.bind({});

Basic.args = { context: "create" };
