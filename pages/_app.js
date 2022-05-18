import '../styles/globals.scss';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {' '}
      <NextSeo
        title='tomkatotrening'
        description='Treningi Oyama Karate Polska - Katowice - Siemianowice Ślaśkie, prowadzone przez Sensei Tomasza Mrowca - 4 Dan'
        canonical='https://www.tomkatotrening.pl/'
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
