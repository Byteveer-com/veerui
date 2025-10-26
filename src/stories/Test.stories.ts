import { Test } from '../components/Test';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Test> = {
  title: 'Components/Test',
  component: Test,
};
export default meta;

type Story = StoryObj<typeof Test>;

export const Default: Story = {};
