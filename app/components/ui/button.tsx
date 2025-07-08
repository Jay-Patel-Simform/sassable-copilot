import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-38 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-[0.98] transform-gpu",
  {
    variants: {
      variant: {
        // Filled variant (default) - Based on Figma Style=Filled
        filled:
          'bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:bg-[var(--primary-30)] active:bg-[var(--primary-25)] focus-visible:bg-[var(--primary-30)] focus-visible:shadow-sm disabled:bg-neutral-20 disabled:text-neutral-40',
        // Outlined variant - Based on Figma Style=Outlined
        outlined:
          'border border-primary text-primary bg-transparent hover:bg-primary/8 active:bg-primary/12 focus-visible:bg-primary/8 disabled:border-neutral-20 disabled:text-neutral-40 disabled:bg-transparent',
        // Text variant - Based on Figma Style=Text
        text: 'text-primary bg-transparent hover:bg-primary/8 active:bg-primary/12 focus-visible:bg-primary/8 disabled:text-neutral-40 disabled:bg-transparent',
        // Elevated variant - Based on Figma Style=Elevated
        elevated:
          'bg-background text-foreground shadow-sm border border-border hover:shadow-md hover:bg-primary/8 active:shadow-sm active:bg-primary/12 focus-visible:shadow-sm focus-visible:bg-primary/8 disabled:bg-neutral-20 disabled:text-neutral-40 disabled:border-neutral-20',
        // Additional variants for completeness
        destructive:
          'bg-destructive text-white shadow-sm hover:bg-destructive/90 active:bg-destructive/80 focus-visible:ring-destructive/50 dark:bg-destructive/60',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 active:bg-secondary/70',
        ghost:
          'hover:bg-accent hover:text-accent-foreground active:bg-accent/80 dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline active:no-underline',
      },
      size: {
        small:
          'h-8 px-3 text-label-sm gap-1.5 has-[>svg]:px-2.5 has-[>svg]:gap-1',
        medium:
          'h-10 px-6 text-label-md gap-2 has-[>svg]:px-4 has-[>svg]:gap-2',
        large:
          'h-12 px-8 text-label-lg gap-2.5 has-[>svg]:px-6 has-[>svg]:gap-2.5',
        icon: 'size-10 p-2',
        'icon-sm': 'size-8 p-1.5',
        'icon-lg': 'size-12 p-2.5',
      },
      loading: {
        true: 'cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'medium',
      loading: false,
    },
  },
);

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  readonly asChild?: boolean;
  readonly loading?: boolean;
  readonly leftIcon?: React.ReactNode;
  readonly rightIcon?: React.ReactNode;
}

function Button({
  className,
  variant,
  size,
  loading = false,
  leftIcon,
  rightIcon,
  asChild = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, loading, className }))}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      aria-label={loading ? `Loading...` : undefined}
      type={asChild ? undefined : 'button'}
      role={asChild ? undefined : 'button'}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
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
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {!loading && leftIcon && (
        <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span className={cn(loading && 'opacity-0')}>{children}</span>
      {!loading && rightIcon && (
        <span className="inline-flex shrink-0">{rightIcon}</span>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
