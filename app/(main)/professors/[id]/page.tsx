import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Book',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  if (!id) {
    notFound();
  }

  return <main className=""></main>;
}
