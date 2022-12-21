import type { Meta, StoryFn } from "@storybook/react";

import type { ContainerProps } from "./Container";
import { Container } from "./Container";

const meta: Meta = {
  title: "Sandbox / Container",
  component: Container,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/...?node-id=...",
    },
  },
};

export default meta;

const Template: StoryFn<ContainerProps> = (args) => <Container {...args} />;

export const Basic = Template.bind({});

Basic.args = {};
