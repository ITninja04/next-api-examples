import { Story, Meta, ComponentStory, ComponentMeta } from '@storybook/react'
import CommentModal, { CommentModalProps } from '.'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'CommentModal',
  component: CommentModal
} as ComponentMeta<typeof CommentModal>;


const Template: ComponentStory<typeof CommentModal> = (args) => <CommentModal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /*
  * Args from CommentModalProps can be filled out here for
  * a Dynamic Story Board
  */
  postId: 1
};
