import { render, screen } from '@testing-library/react'

import AuthorBio from '.'

const mockData = {
  authorId: 1
}

describe('<AuthorBio />', () => {
  it('should render the heading', () => {
    const { container } = render(<AuthorBio {...mockData} />)

    expect(screen.getByRole('heading', { name: /AuthorBio/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
