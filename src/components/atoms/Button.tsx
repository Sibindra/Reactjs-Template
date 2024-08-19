import React from 'react';
import { TButtonProps } from '@app/constants/types/button';

/**
 * ------------------------------------------------------------
 * @param children - The content of the button.
 * @param variant - The variant of the button.
 * @param className - The class name of the button.
 * @param size - The size of the button.
 * @param props - The props of the button.
 *
 * @returns The button component.
 *
 * @example
 * <Button variant="primary" size="md" onClick={() => console.log('clicked')}>
 *  Click me
 * </Button>
 * ------------------------------------------------------------
 */
const Button: React.FC<TButtonProps> = ({
  children,
  variant = 'primary',
  className,
  size = 'md',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    loading: 'bg-gray-300 text-gray-700 cursor-not-allowed',
  };

  const disabledClasses =
    variant === 'loading' ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      {...props}
      disabled={variant === 'loading' || props.disabled}
    >
      {variant === 'loading' ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 12a10 10 0 0110-10V0C4.477 0 0 4.477 0 10h2z"
          ></path>
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
