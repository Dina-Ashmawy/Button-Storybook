import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Button>;


export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonUI: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
};


