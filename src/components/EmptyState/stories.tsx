import { Story, Meta } from '@storybook/react'
import EmptyState from '.'

export default {
  title: 'EmptyState',
  component: EmptyState
} as Meta

export const Default: Story = () => <EmptyState />
