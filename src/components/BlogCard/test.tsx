import { render, screen } from '@testing-library/react'

import BlogCard from '.'

const BlogCardDefaultProps = {
  id: 1,
  title: "How to use search engine optimization to drive sales",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
  userId: 1,
  usersName: "John Doe",
  profileImage: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}

describe('<BlogCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<BlogCard {...BlogCardDefaultProps} />)

    expect(screen.getByRole('heading', { name: /BlogCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
