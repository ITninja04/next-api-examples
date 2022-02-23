import { render, screen } from '@testing-library/react'

import Branding from '.'

describe('<Branding />', () => {
  it('should render the heading', () => {
    const { container } = render(<Branding />)

    expect(screen.getByRole('heading', { name: /Branding/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
