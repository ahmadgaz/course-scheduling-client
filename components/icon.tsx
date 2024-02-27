import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.ReactElement;
  w: string;
  h: string;
}

export default function Icon({ icon, w, h, ...props }: IconProps) {
  return React.cloneElement(icon, {
    className: `h-[${h}] w-[${w}]`,
    strokeWidth: 2.5,
    ...props,
  });
}
