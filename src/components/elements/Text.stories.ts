import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

// Simplified Storybook metadata for the Text component
const meta: Meta<typeof Text> = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'centered',  // Centering the component layout
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Simplified stories with essential args only
export const Default: Story = {
  args: {
    text: '안녕하세요. Lorem Ipsum is simply dummy text. ',
     // Default text
    size: 24,                    // Default font size
    type: 'default',             // Default text type
  },
};

export const Secondary: Story = {
  args: {
    text: '안녕하세요. Lorem Ipsum is simply dummy text. ',
    size: 18,
    type: 'secondary',           // Secondary type with lighter color
  },
};

export const Small: Story = {
  args: {
    text: '안녕하세요. Lorem Ipsum is simply dummy text. ',
    size: 14,                    // Smaller size for subtle content
    type: 'default',
  },
};
