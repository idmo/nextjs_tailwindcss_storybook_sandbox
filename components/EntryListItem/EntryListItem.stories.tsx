import type { Meta, StoryFn } from "@storybook/react";
import { EntryProps } from "../Entry/Entry";
import { entries } from "@/mocks/entries";

var question = entries[1];

import { EntryListItem } from "./EntryListItem";
const meta: Meta = {
  component: EntryListItem,
};

export default meta;

const Template: StoryFn<EntryProps> = (args) => <EntryListItem {...args} />;

export const Basic = Template.bind({});

Basic.args = { topic: question.topic };
