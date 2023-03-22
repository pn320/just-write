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
          'font-sans text-primary_white/90 text-4xl flex justify-center items-center min-h-screen'
        }
      >
        No bullshit. No distractions. Simply start typing.
      </main>
    </>
  );
}
