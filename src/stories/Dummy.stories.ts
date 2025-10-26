import { Dummy } from '../components/Dummy';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dummy> = {
  title: 'Components/Test',
  component: Dummy,
};
export default meta;

type Story = StoryObj<typeof Dummy>;

export const Default: Story = {};
