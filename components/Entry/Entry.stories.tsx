import type { Meta, StoryFn } from "@storybook/react";
import { entries } from "../../mocks/entries";

import type { EntryProps } from "./Entry";
import { Entry } from "./Entry";

var question = entries[1];

const meta: Meta = {
  component: Entry,
};

export default meta;

const Template: StoryFn<EntryProps> = (args) => <Entry {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  topic: question.topic,
  description: question.description,
  createdOnDate: question.createdOnDate,
  updatedOnDate: question.updatedOnDate,
};
