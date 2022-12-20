import { ComponentStory, ComponentMeta } from "@storybook/react";

import { VStack } from "@/components/Layout/VStack";

export default {
  component: VStack,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof VStack>;

const Template: ComponentStory<typeof VStack> = (args) => <VStack {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div>One</div>
      <div>One</div>
      <div>One</div>
      <div>One</div>
    </>
  ),
};
