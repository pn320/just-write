import { AnimatedTextShowcase } from '@/Components/AnimatedTextShowcase';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Just Write</title>
        <meta name="description" content="A calming writing app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main
        className={
          'font-sans flex justify-center items-center min-h-screen bg-dotted-spacing-6 bg-dotted-gray-800/70'
        }
      >
        <AnimatedTextShowcase />
      </main>
    </>
  );
}
