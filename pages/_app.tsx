import { Layout } from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      // Whenever the user explicitly chooses light mode
      localStorage.theme = 'light';
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Head>
        <title>Nessa</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout handleThemeSwitch={handleThemeSwitch}>
        <Component {...pageProps} className="dark" />
      </Layout>
    </>
  );
}
