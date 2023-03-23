import useInterval from '@use-it/interval';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useReducer } from 'react';

export function AnimatedTextShowcase() {
  const words = ['clutter.', 'extras.', 'noise.', 'logins.'];
  const [currentIndex, next] = useReducer((index) => {
    return index === words.length - 1 ? 0 : index + 1;
  }, 0);
  useInterval(() => {
    next();
  }, 2000);

  return (
    <motion.div className="text-primary_white/90 text-2xl lg:text-4xl relative overflow-hidden">
      <Link
        href="/writer"
        className="text-gray-500 hover:text-primary_white/90 transition duration-150 ease-linear"
        key={words[currentIndex]}
      >
        Simply start writing.{' '}
      </Link>
      <AnimatePresence mode="popLayout">
        <span>No </span>
        <motion.p
          key={words[currentIndex]}
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          exit={{ y: 250 }}
          transition={{ type: 'spring', damping: 24 }}
          className="inline-block underline underline-offset-4"
        >
          {`${words[currentIndex]}`}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}
