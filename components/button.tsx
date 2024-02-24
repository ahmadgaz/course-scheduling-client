import Icon from '@/components/icon';
import React from 'react';
import clsx from 'clsx';
import { LoadingSpinner } from './loadingSpinner';

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
        {loading ? <LoadingSpinner /> : props.children}
      </button>
    );
  }

  if (React.isValidElement(variant)) {
    return (
      <BaseButton {...props} className={`${props.className} button-icon`}>
        <Icon icon={variant} w="45px" h="45px" />
      </BaseButton>
    );
  }
  return (
    <BaseButton
      {...props}
      className={clsx(`${props.className}`, {
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
