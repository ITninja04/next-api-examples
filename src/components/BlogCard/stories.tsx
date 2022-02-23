import { Story, Meta, ComponentStory, ComponentMeta } from '@storybook/react'
import BlogCard, { BlogCardProps, LoadingBlogCard } from '.';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'BlogCard',
  component: BlogCard
} as ComponentMeta<typeof BlogCard>;


const Template: ComponentStory<typeof BlogCard> = (args) => <BlogCard {...args} />;

const LoadingTemplate: ComponentStory<typeof LoadingBlogCard> = () => <LoadingBlogCard />

export const Primary = Template.bind({});

export const LoadingVariant = LoadingTemplate.bind({});

Primary.args = {
  /*
  * Args from BlogCardProps can be filled out here for
  * a Dynamic Story Board
  */
  title: "How to use search engine optimization to drive sales",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
  userId: 1,
  usersName: "John Doe",
  profileImage: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
