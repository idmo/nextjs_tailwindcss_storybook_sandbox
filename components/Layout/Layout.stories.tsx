import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Avatar } from "@ui/Avatar";
import { VStack } from "@ui/VStack";
import { HStack } from "@ui/HStack";
import { Button } from "@ui/Button";

export default {
  title: "Application Shells",
  component: Layout,
  argTypes: {
    backgroundCOlor: { control: "color" },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Home = Template.bind({});
Home.args = {
  children: (
    <>
      <HStack>
        <VStack className="w-1/5">
          <Navbar orientation="vertical">
            <Button context="navigation">Pursuits</Button>
            <Button context="navigation">Questions</Button>
            <Button context="navigation">Proposals</Button>
            <Button context="navigation">Team</Button>
          </Navbar>
        </VStack>
        <VStack>
          <Navbar
            padding="small"
            orientation="horiztonal"
            className="flex justify-between"
          >
            <div className="space-x-2">
              <Button context="menu">Home</Button>
              <Button context="menu">Home</Button>
              <Button context="menu">Home</Button>
            </div>
            <div className="justify-self-end">
              <Avatar>Brian</Avatar>
            </div>
          </Navbar>
          <Container element="container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            explicabo accusantium dignissimos. Quae ad neque, alias iusto
            molestiae animi dolorum reiciendis facilis sed atque aut, quos odio,
            aspernatur fugiat unde.
          </Container>
        </VStack>
      </HStack>
    </>
  ),
};
