import { Story, Meta, ComponentStory, ComponentMeta } from '@storybook/react'
import AuthorBio, { AuthorBioProps } from '.'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'AuthorBio',
  component: AuthorBio
} as ComponentMeta<typeof AuthorBio>;


const Template: ComponentStory<typeof AuthorBio> = (args) => <AuthorBio {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /*
  * Args from AuthorBioProps can be filled out here for
  * a Dynamic Story Board
  */
  authorId: 1
};
