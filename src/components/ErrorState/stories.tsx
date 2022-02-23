import { ComponentStory, ComponentMeta } from '@storybook/react'
import ErrorState from '.'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ErrorState',
  component: ErrorState
} as ComponentMeta<typeof ErrorState>;


const Template: ComponentStory<typeof ErrorState> = (args) => <ErrorState {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /*
  * Args from ErrorStateProps can be filled out here for
  * a Dynamic Story Board
  */
 message: "An error occurred while processing your request. Please refresh and try again.",
 showRefreshButton: true
};
