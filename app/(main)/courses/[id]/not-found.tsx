import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Not Found',
};

export default function NotFound() {
  return (
    <main className="">
      <FaceFrownIcon className="" />
      <h2 className="">404 Not Found</h2>
      <p>Could not find the requested page.</p>
      <Link href="/catalog" className="">
        Go Back
      </Link>
    </main>
  );
}
