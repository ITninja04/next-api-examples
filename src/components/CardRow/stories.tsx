import { ComponentStory, ComponentMeta } from '@storybook/react'
import CardRow from '.'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'CardRow',
  component: CardRow
} as ComponentMeta<typeof CardRow>;


const Template: ComponentStory<typeof CardRow> = (args) =><div className="flex items-center justify-center h-screen"> <div className='container'><CardRow {...args} /></div></div>;

export const Primary = Template.bind({});

Primary.args = {
  /*
  * Args from CardRowProps can be filled out here for
  * a Dynamic Story Board
  */
 posts: [
   {
     id: 1,
    title:  'Boost your conversion rate',
    body:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    userId: 1,
     usersName:'Roel Aufderehar',
     profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   },
   {
     id: 2,
    title: 'How to use search engine optimization to drive sales',
    body:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
     userId: 2,
     usersName:'Brenna Goyette',
     profileImage: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   },
   {
     id:3,
     title:'Improve your customer experience',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
     userId: 3,
     usersName:'Daniela Metz',
     profileImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   }
 ]
};
