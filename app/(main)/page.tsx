import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | SJSU Course Planner',
    default: 'SJSU Course Planner',
  },
  description: 'Welcome to SJSU Course Planner! Plan your courses with ease.',
};

export default function Page() {
  return <main>landing</main>;
}
