import { ComponentStory, ComponentMeta } from '@storybook/react'
import Branding, { BlogCopyMarkText, BlogIcon} from '.'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Branding',
  component: Branding
} as ComponentMeta<typeof Branding>;


const Container: React.FC = ({children}) => (
  <div className='w-full h-full flex justify-center'>
    {children}
  </div>
)

const Template: ComponentStory<typeof Branding> = (args) => <Container><Branding {...args} /></Container>;
const Icon: ComponentStory<typeof Branding> = (args) => <Container><BlogIcon {...args} /></Container>;
const CopyText: ComponentStory<typeof Branding> = (args) => <Container> <BlogCopyMarkText {...args} /></Container>;

export const AppLogo = Template.bind({});
export const AppIcon = Icon.bind({});
export const AppCopyMark = CopyText.bind({});
