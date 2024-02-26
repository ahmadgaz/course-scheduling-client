import { twMerge } from 'tailwind-merge';
import React from 'react';
import clsx from 'clsx';

import LoadingSpinner from '@/components/loadingSpinner';
import Icon from '@/components/icon';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';

export default function Button(
  props: {
    variant: ButtonVariant | React.ReactElement;
    prefix?: React.ReactElement;
    postfix?: React.ReactElement;
    disabled?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { variant, prefix, postfix, disabled, loading, children } = props;
  function BaseButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
      <button {...props} disabled={disabled}>
        {loading ? (
          <div className="relative">
            <div className="opacity-0">{props.children}</div>
            <LoadingSpinner className="absolute top-0 flex h-full w-full items-center justify-center" />
          </div>
        ) : (
          props.children
        )}
      </button>
    );
  }

  if (React.isValidElement(variant)) {
    return (
      <BaseButton
        {...props}
        className={twMerge(
          'animation flex h-[45px] w-[45px] items-center justify-center text-primary hover:opacity-50 active:opacity-25 disabled:text-neutral',
          props.className,
        )}
      >
        <Icon icon={variant} w="45px" h="45px" />
      </BaseButton>
    );
  }
  return (
    <BaseButton
      {...props}
      className={twMerge(
        clsx(
          {
            'animation flex h-fit items-center justify-center gap-[10px] rounded-[20px] border-2 border-border bg-primary px-[20px] py-[5px] text-button text-background hover:opacity-50 active:opacity-25 disabled:bg-border disabled:text-neutral':
              variant === 'primary',
            'animation flex h-fit items-center justify-center gap-[10px] rounded-[20px] border-2 border-border bg-secondary px-[20px] py-[5px] text-button text-background hover:opacity-50 active:opacity-25 disabled:bg-border disabled:text-neutral':
              variant === 'secondary',
            'animation flex  h-fit items-center justify-center gap-[10px] px-[20px] py-[5px] text-button text-primary hover:opacity-50 active:opacity-25 disabled:text-neutral':
              variant === 'tertiary',
            'animation flex h-fit items-center justify-center gap-[10px] rounded-[20px] border-2 border-secondary px-[20px] py-[5px] text-button text-secondary hover:opacity-50 active:opacity-25 disabled:border-neutral disabled:text-neutral':
              variant === 'ghost',
          },
          props.className,
        ),
      )}
    >
      {prefix ? <Icon icon={prefix} w="14px" h="14px" /> : null}
      {children}
      {postfix ? <Icon icon={postfix} w="14px" h="14px" /> : null}
    </BaseButton>
  );
}
