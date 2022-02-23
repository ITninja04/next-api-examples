import { render, screen } from '@testing-library/react'

import BlogPost from '.'

const mockData = {
  postId: 1
}

describe('<BlogPost />', () => {
  it('should render the heading', () => {
    const { container } = render(<BlogPost {...mockData} />)

    expect(screen.getByRole('heading', { name: /Post/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
