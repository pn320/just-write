import useInterval from '@use-it/interval';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useReducer } from 'react';

export default function Home() {
  const words = ['distractions.', 'bulls**t.', 'signup.', 'nonsense.'];
  const [currentIndex, next] = useReducer((index) => {
    return index === 3 ? 0 : index + 1;
  }, 0);
  useInterval(() => {
    next();
  }, 2000);

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
          'font-sans text-primary_white/90 text-4xl flex justify-center items-center min-h-screen bg-dotted-spacing-6 bg-dotted-gray-600/60'
        }
      >
        <div className="relative overflow-hidden">
          <AnimatePresence mode="popLayout">
            <Link
              href="/writer"
              className="text-gray-700 hover:text-primary_white/90 transition duration-150 ease-in
            "
            >
              Simply start writing.
            </Link>
            <span>No </span>
            <motion.p
              key={words[currentIndex]}
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              exit={{ y: 250 }}
              transition={{ type: 'spring', damping: 20 }}
              className="inline-block"
            >
              {`${words[currentIndex]}\xa0`}
            </motion.p>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
