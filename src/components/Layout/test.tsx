import { render, screen } from '@testing-library/react'

import Layout from '.'

const sampleData = {
  pageTitle: "Sample Page",
  menuItems: [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
  ],
  userDetails: {
    name: 'Tom Cook',
    email: 'tom@example.com',
    profileImg:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  userMenuItems: [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ],
  showSearch: true,
  searchFunction: () => {},
}

describe('<Layout />', () => {
  it('should render the heading', () => {
    const { container } = render(<Layout {...sampleData} />)

    expect(screen.getByRole('heading', { name: /Layout/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
