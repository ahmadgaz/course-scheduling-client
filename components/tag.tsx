import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'sm' | 'lg';
  count?: number;
}

export default function Tag({ size, count, children, ...props }: TagProps) {
  return (
    <button
      {...props}
      className={twMerge(
        clsx('flex gap-[5px] rounded-lg bg-border hover:opacity-50 active:opacity-25', {
          'px-[15px] py-[5px] text-caption': size === 'sm',
          'px-[20px] py-[10px] text-tag text-neutral': size === 'lg',
        }),
        props.className,
      )}
    >
      {children}
      {count ? (
        <span
          className={clsx({
            'text-caption text-neutral': size === 'sm',
            'text-tag text-text': size === 'lg',
          })}
        >
          {count}
        </span>
      ) : null}
    </button>
  );
}
