import Icon from '@/components/icon';
import React from 'react';
import clsx from 'clsx';
import { LoadingSpinner } from './loadingSpinner';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';

export default function Button({
  variant,
  prefix,
  postfix,
  disabled,
  loading,
  children,
}: {
  variant: ButtonVariant | React.ReactElement;
  prefix?: React.ReactElement;
  postfix?: React.ReactElement;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}) {
  function BaseButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
      <button disabled={disabled} {...props}>
        {loading ? <LoadingSpinner /> : props.children}
      </button>
    );
  }

  if (React.isValidElement(variant)) {
    return (
      <BaseButton className="button-icon">
        <Icon icon={variant} w="45px" h="45px" />
      </BaseButton>
    );
  }
  return (
    <BaseButton
      className={clsx({
        'button-primary': variant === 'primary',
        'button-secondary': variant === 'secondary',
        'button-tertiary': variant === 'tertiary',
        'button-ghost': variant === 'ghost',
      })}
    >
      {prefix ? <Icon icon={prefix} w="14px" h="14px" /> : null}
      {children}
      {postfix ? <Icon icon={postfix} w="14px" h="14px" /> : null}
    </BaseButton>
  );
}
