import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'xBook',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return <main className="">courses</main>;
}
