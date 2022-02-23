import { render, screen } from '@testing-library/react'

import Comments from '.'

const mockData = {
  postId: 1
}

describe('<Comments />', () => {
  it('should render the heading', () => {
    const { container } = render(<Comments {...mockData} />)

    expect(screen.getByRole('heading', { name: /Comments/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
