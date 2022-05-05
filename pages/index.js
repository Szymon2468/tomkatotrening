import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import MasterLayout from '../src/components/MasterLayout/MasterLayout';
import Nav from '../src/components/Nav/Nav';
import styles from './index.module.scss';

let inc = 1;
let i = 0;
let j = 0;
const animationInterval = 300;

export default function Home() {
  const [textToDisplay, setTextToDisplay] = useState('');

  const textArray = ['LEPSZA KONDYCJA', 'LEPSZE SAMOPOCZUCIE'];

  useEffect(() => {
    setTextToDisplay('');
  }, []);

  useEffect(() => {
    setInterval(() => {
      let displayText = '';
      if (j === textArray.length) {
        j = 0;
        setTextToDisplay('');
      }
      for (i = 0; i < inc && i < textArray[j].length; i++) {
        displayText += textArray[j][i];
      }
      setTextToDisplay(displayText);
      inc++;
      console.log(j, '===', textArray.length - 1);

      if (i === textArray[j].length && j <= textArray.length) {
        j++;
        inc = 1;
      }
    }, animationInterval);
  }, []);

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
        <main>
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
                  <h1 className={styles.animatedHeader}>{textToDisplay}</h1>
                </div>
              </header>
            </div>
          </section>
        </main>
      </MasterLayout>
    </>
  );
}
