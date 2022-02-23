import { render, screen } from '@testing-library/react'

import SkeletonGenerator from '.'

describe('<SkeletonGenerator />', () => {
  it('should render the heading', () => {
    const { container } = render(<SkeletonGenerator />)

    expect(screen.getByRole('heading', { name: /SkeletonGenerator/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
