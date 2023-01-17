import type { Meta, StoryFn } from "@storybook/react";

import type { ContainerProps } from "./Container";
import { Container } from "./Container";

const meta: Meta = {
  component: Container,
};

export default meta;

const Template: StoryFn<ContainerProps> = (args) => <Container {...args} />;

export const Basic = Template.bind({});
Basic.args = { children: <div>Foo</div> };

export const Box = Template.bind({});
Box.args = {
  children: <div>Stuff</div>,
  context: "box",
};

export const Panel = Template.bind({});
Panel.args = {
  children: "Stuff",
  context: "panel",
};

export const Card = Template.bind({});
Card.args = {
  children: "Stuff",
  context: "card",
  size: "constrained",
};
