import type { Meta, StoryObj } from '@storybook/react';
import SwiperModule from './SwiperModule';

// Simplified Storybook metadata
const meta: Meta<typeof SwiperModule> = {
  title: 'Example/Swiper',
  component: SwiperModule,
  tags: ['autodocs'],
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
