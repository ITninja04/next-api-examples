import { ComponentStory, ComponentMeta } from '@storybook/react'
import Layout from '.'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});


const user = {
  name: 'John Doe',
  email: 'john@doe.com',
  profileImg:
    'https://randomuser.me/api/portraits/lego/8.jpg',
}
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]


Primary.args = {
  pageTitle: "Sample Page",
  userDetails: user,
  userMenuItems: userNavigation,
  showSearch: true
};
