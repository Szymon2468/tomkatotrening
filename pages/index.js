import Head from 'next/head';
import Image from 'next/image';
import MasterLayout from '../src/components/MasterLayout/MasterLayout';
import Nav from '../src/components/Nav/Nav';
import styles from './index.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          Oyama Karate Katowice - Ligota - Panewniki - Piotrowice - Podlesie,
          oraz Gliwice - Oyama-karate.eu - Nasze sekcje - oyama-karate.eu
        </title>
        <meta
          property='og:title'
          content={`Oyama Karate Katowice - Ligota - Panewniki - Piotrowice - Podlesie,
          oraz Gliwice - Oyama-karate.eu - Nasze sekcje - oyama-karate.eu`}
          key='ogtitle'
        />
        <meta key='robots' name='robots' content='index,follow' />
        <meta key='googlebot' name='googlebot' content='index,follow' />
        <meta name='description' content={'opis strony'} />
        <meta property='og:description' content={'opis strony'} key='ogdesc' />
      </Head>
      <MasterLayout isNavBackgroundTransparent={true}>
        <section className={styles.section}>
          <div className={styles.bottomText}>
            <h2>Oyama, czyli Wielka Góra</h2>
            <h2 className={styles.marginLeft}>
              - trenuj ze mną w drodze na szczyt!
            </h2>
          </div>

          <div className={styles.landingPage}>
            <header>
              <div className={styles.topText}>
                <h1>TRENINGI KARATE I FITNESS TO...</h1>
                <h1 className={styles.animatedHeader}>LEPSZA KONDYCJA</h1>
              </div>
            </header>
          </div>
        </section>
      </MasterLayout>
    </>
  );
}
