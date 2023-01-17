import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HStack } from "@/components/Layout/HStack";
import { Container } from "@/components/Layout/Container";

export default {
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

export const Grid = Template.bind({});
Grid.args = {
  children: (
    <>
      <Container>
        <div className="bg-gray-200">Nested</div>
        <div className="bg-gray-200">Nested</div>
        <div className="bg-gray-200">Nested</div>
        <div className="bg-gray-200">Nested</div>
      </Container>
      <Container>
        <div className="bg-gray-200">Nested</div>
        <div className="bg-gray-200">Nested</div>
        <div className="bg-gray-200">Nested</div>
        <div className="bg-gray-200">Nested</div>
      </Container>
      <Container>
        <div className="bg-gray-200">Nested</div>
        <div className="bg-gray-200">Nested</div>
        <div className="bg-gray-200">Nested</div>
        <div className="bg-gray-200">Nested</div>
      </Container>
    </>
  ),
};
