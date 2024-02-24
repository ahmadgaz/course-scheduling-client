import React from 'react';

export default function Icon({
  icon,
  w,
  h,
}: {
  icon: React.ReactElement;
  w: string;
  h: string;
}) {
  return React.cloneElement(icon, {
    className: `h-[${h}] w-[${w}]`,
    strokeWidth: 3,
  });
}
