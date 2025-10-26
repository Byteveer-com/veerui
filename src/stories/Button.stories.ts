import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click me',
    type: 'primary'
  },
};
export const Secondary: Story = {
  args: {
    children: 'Click me',
    type: 'secondary'
  },
};