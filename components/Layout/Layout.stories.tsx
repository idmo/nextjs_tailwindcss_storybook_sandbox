import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Layout } from "@/components/Layout";
import { Navbar } from "../Navbar";
import { Avatar } from "../UI/Avatar";

export default {
  title: "Components/Layout",
  component: Layout,
  argTypes: {
    backgroundCOlor: { control: "color" },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Content",
};

export const WithNavbarMenu = Template.bind({});
WithNavbarMenu.args = {
  children: (
    <Navbar>
      <div className="flex flex-row items-center space-x-3">
        <div>Menu</div>
        <div>Item</div>
        <div>Item</div>
      </div>
      <Avatar size="large">Brian</Avatar>
    </Navbar>
  ),
};
