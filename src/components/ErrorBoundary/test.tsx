import { render, screen } from '@testing-library/react'

import ErrorBoundary from '.'

describe('<ErrorBoundary />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <ErrorBoundary>
        <></>
      </ErrorBoundary>
    )

    expect(
      screen.getByRole('heading', { name: /ErrorBoundary/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
