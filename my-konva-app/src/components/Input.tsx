import * as React from 'react';
import { Label as RadixLabel } from '@radix-ui/react-label';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'default' | 'outline';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  inputSize?: InputSize;
  variant?: InputVariant;
}

const sizeClasses: Record<InputSize, string> = {
  sm: 'h-8 px-2 text-xs',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
};

const variantClasses: Record<InputVariant, string> = {
  default: 'border-input bg-background',
  outline: 'border-2 border-primary bg-background',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className = '', label, description, error, inputSize = 'md', variant = 'default', ...props },
    ref
  ) => {
    return (
      <div className="w-full space-y-1">
        {label && <RadixLabel className="block text-sm font-medium mb-1">{label}</RadixLabel>}
        <input
          ref={ref}
          className={`flex w-full rounded-md border ${sizeClasses[inputSize]} ${variantClasses[variant]} ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-red-500' : ''} ${className}`}
          aria-invalid={!!error}
          {...props}
        />
        {description && !error && <div className="text-xs text-muted-foreground">{description}</div>}
        {error && <div className="text-xs text-red-500">{error}</div>}
      </div>
    );
  }
);
Input.displayName = 'Input';