import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Simplified Storybook metadata
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',  // Centering the component layout
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Simplified stories with essential args only
export const Primary: Story = {
  args: {
    backgroundColor: 'primary',
    size: 'md',
    shape: 'semi',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    backgroundColor: 'secondary',
    size: 'md',
    shape: 'semi',
    label: 'Secondary Button',
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: 'disabled',
    size: 'md',
    shape: 'semi',
    label: 'Disabled Button',
  },
};
