import { ButtonHTMLAttributes } from 'react';

export type TButtonVariant = 'primary' | 'secondary' | 'loading';
export type TButtonSize = 'sm' | 'md' | 'lg';

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  size: TButtonSize;
  variant: TButtonVariant;
};
