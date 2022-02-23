import { Story, Meta, ComponentStory, ComponentMeta } from '@storybook/react'
import BlogPost, { PostProps } from '.'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'BlogPost',
  component: BlogPost
} as ComponentMeta<typeof BlogPost>;


const Template: ComponentStory<typeof BlogPost> = (args) => <BlogPost {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /*
  * Args from PostProps can be filled out here for
  * a Dynamic Story Board
  */
  postId: 1,
};
