import useInterval from '@use-it/interval';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useReducer } from 'react';

export function AnimatedTextShowcase() {
  const words = ['distractions.', 'bulls**t.', 'signup.', 'nonsense.'];
  const [currentIndex, next] = useReducer((index) => {
    return index === 3 ? 0 : index + 1;
  }, 0);
  useInterval(() => {
    next();
  }, 2000);

  return (
    <div className="mx-auto relative overflow-hidden">
      <Link
        href="/writer"
        className="text-gray-700 hover:text-primary_white/90 transition duration-150 ease-in"
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
          transition={{ type: 'spring', damping: 20 }}
          className="inline-block"
        >
          {`${words[currentIndex]}`}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
