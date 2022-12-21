import type { Meta, StoryFn } from "@storybook/react";
import type { AlertProps } from "./Alert";
import { Alert } from "./Alert";
import { Button } from "@/components/UI/Button";

const actions = [
  <Button context="link" key={0} onClick={() => {}}>
    Okay
  </Button>,
  <Button context="link" key={1} onClick={() => {}}>
    Cancel
  </Button>,
];

const meta: Meta = {
  component: Alert,
  parameters: {},
};

export default meta;

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

export const Basic = Template.bind({});
export const WithActions = Template.bind({});

Basic.args = {
  title: "Short title for Alert",
  children: "Here is where you provide further explanation.",
};

WithActions.args = {
  title: "With Actions",
  intent: "primary",
  children: "The buttons are for subsequent actions",
  actions: actions,
};
