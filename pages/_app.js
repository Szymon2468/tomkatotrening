import '../styles/globals.scss';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title='tomkatotrening - treningi Oyama Karate'
        description='Treningi Oyama Karate Polska - Katowice - Siemianowice Ślaśkie, prowadzone przez Sensei Tomasza Mrowca - 4 Dan'
        canonical='https://www.tomkatotrening.pl/'
        openGraph={{
          url: 'https://tomkatotrening.pl/',
          type: 'article',
          title: 'tomkatotrening - treningi Oyama Karate',
          description='Treningi Oyama Karate Polska - Katowice - Siemianowice Ślaśkie, prowadzone przez Sensei Tomasza Mrowca - 4 Dan',
          site_name: 'tomkatotrening - treningi Oyama Karate'
        }}
        additionalMetaTags={[
          {
            property: 'dc:creator',
            content: 'Gancle Studio'
          },
          {
            name: 'application-name',
            content: 'tomkatotrening'
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1; firefox=1; safari=1'
          }
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
