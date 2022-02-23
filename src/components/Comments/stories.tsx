import { Story, Meta, ComponentStory, ComponentMeta } from '@storybook/react'
import Comments, { CommentsProps } from '.'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Comments',
  component: Comments
} as ComponentMeta<typeof Comments>;


const Template: ComponentStory<typeof Comments> = (args) => <Comments {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /*
  * Args from CommentsProps can be filled out here for
  * a Dynamic Story Board
  */
  postId: 1
};
