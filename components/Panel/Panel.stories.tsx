import type { Meta, StoryFn } from "@storybook/react";

import type { PanelProps } from "./Panel";
import { Panel } from "./Panel";

const meta: Meta = {
  title: "Sandbox / Panel",
  component: Panel,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/...?node-id=...",
    },
  },
};

export default meta;

// 👇 We create a "template" of how args map to rendering
const Template: StoryFn<PanelProps> = (args) => <Panel {...args} />;

// 👇 Each story then reuses that template
export const Basic = Template.bind({});

// Story args
// Learn more: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};
