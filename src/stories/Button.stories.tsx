import Button from '@app/components/atoms/Button';
import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@assets/styles/index.css';
import { TButtonSize, TButtonVariant } from '@app/constants/types/button';
import { fn } from '@storybook/test';

type TStoryProps = ComponentProps<typeof Button> & {
  children: React.ReactNode;
  variant: TButtonVariant;
  size: TButtonSize;
};

const meta: Meta<TStoryProps> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'loading'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
  },

  args: {
    onClick: fn(),
  },
};

export default meta;

type TStory = StoryObj<TStoryProps>;

export const Primary: TStory = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
  render: ({ children, ...args }) => {
    return (
      <Button onClick={() => console.log('Button is clicked')} {...args}>
        {children}
      </Button>
    );
  },
};


export const Secondary: TStory = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
  },
  render: ({ children, ...args }) => {
    return (
      <Button onClick={() => console.log('Button is clicked')} {...args}>
        {children}
      </Button>
    );
  },
};

export const Loading: TStory = {
  args: {
    children: 'Button',
    variant: 'loading',
    size: 'md',
  },
  render: ({ children, ...args }) => {
    return (
      <Button onClick={() => console.log('Button is clicked')} {...args}>
        {children}
      </Button>
    );
  },
};
