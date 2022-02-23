import { render, screen } from '@testing-library/react'

import ErrorState from '.'

const testData = {
  message: "An error occurred while processing your request. Please refresh and try again.",
  showRefreshButton: true
}
describe('<ErrorState />', () => {
  it('should render the heading', () => {
    const { container } = render(<ErrorState {...testData} />)

    expect(screen.getByRole('heading', { name: /ErrorState/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
