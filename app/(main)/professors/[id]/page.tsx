import { notFound } from 'next/navigation';
import React from 'react';

import RatingSummary from '@/components/rating-summary';
import Breadcrumb from '@/components/breadcrumb';

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: params.id,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  if (!id) {
    notFound();
  }

  const rating = 2.6;
  const name = 'Jahan Ghofraniha';
  const reviewCount = 47;
  const email = 'YqVp3@example.com';

  return (
    <main className="mx-auto flex max-w-[1076px] flex-col gap-[10px] p-[10px]">
      <Breadcrumb className="flex py-[10px]" />
      <RatingSummary reviewCount={reviewCount} name={name} rating={rating} />
    </main>
  );
}
