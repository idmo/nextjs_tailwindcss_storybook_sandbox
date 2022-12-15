import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navbar } from "@/components/Navbar";
import { Button } from "../UI/Button/Button";
import { Avatar } from "../UI/Avatar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const WithMenu = Template.bind({});
WithMenu.args = {
  orientation: "horiztonal",
  children: (
    <>
      <Button context="navigation">Home</Button>
      <Button context="navigation">About</Button>
      <Button context="navigation">Settings</Button>
      <Avatar>Brian</Avatar>
    </>
  ),
};
