import type {Meta, StoryFn} from '@storybook/react';

import type {WrapperProps} from './Wrapper';
import {Wrapper} from './Wrapper';

// Learn how to write stories:
// https://web.docs.shopify.io/docs/guides/storybook/how-to-write-story-files
const meta: Meta = {
  component: Wrapper,
  parameters: {
    // Embedding Figma designs
    // The embed appears in the "Design" tab of the story
    // Learn more: https://pocka.github.io/storybook-addon-designs/?path=/docs/docs-figma-readme--page
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/...?node-id=...',
    },
  },
};

export default meta;

// 👇 We create a "template" of how args map to rendering
const Template: StoryFn<WrapperProps> = (args) => <Wrapper {...args} />;

// 👇 Each story then reuses that template
export const Basic = Template.bind({});

// Story args
// Learn more: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};
