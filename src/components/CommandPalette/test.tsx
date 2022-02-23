import { render, screen } from '@testing-library/react'

import CommandPalette from '.'

describe('<CommandPalette />', () => {
  it('should render the heading', () => {
    const { container } = render(<CommandPalette />)

    expect(screen.getByRole('heading', { name: /CommandPalette/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
