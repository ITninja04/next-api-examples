import { ComponentStory, ComponentMeta } from '@storybook/react'
import CommandPalette from '.'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'CommandPalette',
  component: CommandPalette
} as ComponentMeta<typeof CommandPalette>;


const Template: ComponentStory<typeof CommandPalette> = (args) => <CommandPalette {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /*
  * Args from CommandPaletteProps can be filled out here for
  * a Dynamic Story Board
  */
};
