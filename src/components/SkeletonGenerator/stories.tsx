import { Story, Meta, ComponentStory, ComponentMeta } from '@storybook/react'
import SkeletonGenerator, { SkeletonGeneratorProps } from '.'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'SkeletonGenerator',
  component: SkeletonGenerator
} as ComponentMeta<typeof SkeletonGenerator>;


const Template: ComponentStory<typeof SkeletonGenerator> = (args) => <SkeletonGenerator {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /*
  * Args from SkeletonGeneratorProps can be filled out here for
  * a Dynamic Story Board
  */
  minLength: 4,
  maxLines: 12,
  minLines: 4,
  baseColCount: 12,
  baseGap: 4
};
