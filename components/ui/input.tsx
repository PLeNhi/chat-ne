import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'w-full rounded-full border border-border bg-input px-4 py-3 text-slate-100 outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20',
        className
      )}
      {...props}
    />
  );
}
