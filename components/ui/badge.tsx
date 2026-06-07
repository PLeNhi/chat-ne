import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/utils';

type BadgeProps = ComponentPropsWithoutRef<'span'>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary',
        className
      )}
      {...props}
    />
  );
}
