import {
  BookmarkIcon,
  EnvelopeIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';

import Button from '@/components/button';
import Stars from '@/components/stars';

interface RatingSummaryProps extends React.HTMLProps<HTMLDivElement> {
  reviewCount: number;
  name: string;
  rating: number;
}

export default function RatingSummary({
  reviewCount,
  name,
  rating,
  ...props
}: RatingSummaryProps) {
  return (
    <div className="default-border flex flex-1 items-end rounded-lg bg-ok p-[32px] opacity-75">
      <p className="flex-1 text-caption text-text opacity-75 mix-blend-color-burn">
        {reviewCount} Reviews
      </p>
      <div className="flex flex-1 flex-col items-center gap-[3px] text-text opacity-75 mix-blend-color-burn">
        <h1 className="text-center text-title">{name}</h1>
        <h2 className="text-rating">{rating}</h2>
        <div className="h-[50px]">
          <Stars rating={rating} />
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-[5px] opacity-75 mix-blend-color-burn">
        <Button variant={<EnvelopeIcon />} className="text-text" />
        <Button variant={<ShareIcon />} className="text-text" />
        <Button variant={<BookmarkIcon />} className="text-text" />
      </div>
    </div>
  );
}
