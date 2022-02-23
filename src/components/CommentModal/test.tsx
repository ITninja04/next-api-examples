import { render, screen } from '@testing-library/react'

import CommentModal from '.'

const mockData = {
  postId: 1
}

describe('<CommentModal />', () => {
  it('should render the heading', () => {
    const { container } = render(<CommentModal {...mockData} />)

    expect(screen.getByRole('heading', { name: /CommentModal/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
