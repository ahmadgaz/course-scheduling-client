import {
  ArrowPathIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';
import { notFound } from 'next/navigation';
import React from 'react';

import RatingSummary from '@/components/rating-summary';
import Breadcrumb from '@/components/breadcrumb';
import Icon from '@/components/icon';

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
      <div className="flex gap-[10px]">
        <RatingSummary
          reviewCount={reviewCount}
          name={name}
          rating={rating}
          className="flex-1"
        />
        <div className="flex flex-col gap-[10px]">
          <div className="default-border flex flex-1 items-center gap-[10px] rounded-lg bg-good p-[32px] opacity-75">
            <Icon
              icon={<ClipboardDocumentListIcon />}
              h="45px"
              w="45px"
              className="text-text opacity-50 mix-blend-color-burn"
            />
            <div className="text-text opacity-50 mix-blend-color-burn">
              <h3 className="text-title">A-</h3>
              <p className="text-body">Average Grade</p>
            </div>
          </div>
          <div className="default-border flex flex-1 items-center gap-[10px] rounded-lg bg-ok p-[32px] opacity-75">
            <Icon
              icon={<ArrowPathIcon />}
              h="45px"
              w="45px"
              className="text-text opacity-75 mix-blend-color-burn"
            />
            <div className="text-text opacity-75 mix-blend-color-burn">
              <h3 className="text-title">39%</h3>
              <p className="text-body">Would Take Again</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
