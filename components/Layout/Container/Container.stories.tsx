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
