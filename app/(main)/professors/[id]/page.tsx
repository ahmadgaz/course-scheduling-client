import { BookmarkIcon, EnvelopeIcon, ShareIcon } from '@heroicons/react/24/outline';
import { notFound } from 'next/navigation';
import React from 'react';

import Breadcrumb from '@/components/breadcrumb';
import Button from '@/components/button';

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: params.id,
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const rating = 2.6
  const name = 'Jahan Ghofraniha';
  const reviewCount = 47;
  const email = 'YqVp3@example.com';

  if (!id) {
    notFound();
  }
  console.log(Math.ceil(rating*20))

  return <main className="p-[10px] flex flex-col gap-[10px] max-w-[1076px] mx-auto">
    <Breadcrumb className='flex py-[10px]' />
     <div className='flex gap-[10px]'>
        <div className='flex-1 flex rounded-lg default-border p-[32px] items-end bg-ok opacity-75'>
            <p className='text-caption text-text mix-blend-color-burn flex-1 opacity-75'>{reviewCount} Reviews</p>
            <div className='flex-1 flex flex-col items-center gap-[3px] text-text mix-blend-color-burn opacity-75'>
                <h1 className='text-title text-center'>{name}</h1>
                <h2 className='text-rating'>{rating}</h2>
                <div className={`flex gap-[5px] bg-gradient-to-r from-text from-52% to-[rgb(var(--color-text)/0.5)] to-52%`}>
                  <div className='w-[50px] h-[50px]'/>
                  <div className='w-[50px] h-[50px]'/>
                  <div className='w-[50px] h-[50px]'/>
                  <div className='w-[50px] h-[50px]'/>
                  <div className='w-[50px] h-[50px]'/>
                </div>
            </div>
            <div className='flex-1 gap-[5px] mix-blend-color-burn opacity-75 flex justify-end'>
              <Button variant={<EnvelopeIcon />} className='text-text' />
              <Button variant={<ShareIcon />} className='text-text' />
              <Button variant={<BookmarkIcon />} className='text-text' />
            </div>
          </div>
      </div>
  </main>;
}