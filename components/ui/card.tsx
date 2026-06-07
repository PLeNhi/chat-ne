import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/utils';

type CardProps = ComponentPropsWithoutRef<'div'>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-border bg-surface shadow-sm shadow-black/20',
        className
      )}
      {...props}
    />
  );
}
