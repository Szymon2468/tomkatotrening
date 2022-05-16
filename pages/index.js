import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import MasterLayout from '../src/components/MasterLayout/MasterLayout';
import styles from './index.module.scss';
import photo3 from '../src/assets/homepage/photo3.webp';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import Link from 'next/link';

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
    const interval = setInterval(() => {
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

      if (i === textArray[j].length && j <= textArray.length) {
        j++;
        inc = 1;
      }
    }, animationInterval);
    // return clearInterval(interval);
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

          <section>
            <div className='container'>
              <h2 className={styles.sectionHeader}>
                ZRÓB DZISIAJ TO, CZEGO INNYM SIĘ NIE CHCE, A JUTRO MIEJ TO,
                CZEGO INNI PRAGNĄ
              </h2>
              <div className={styles.contactContainer}>
                <span>
                  <div className={styles.contact}>
                    <BsTelephoneFill />
                    <a href='tel:600-288-637'>
                      <p>600 288 637</p>
                    </a>
                  </div>
                  <div className={styles.contact}>
                    <IoMdMail />
                    <a href='mailto:tomkatotrening@wp.pl'>
                      <p>tomkatotrening@wp.pl</p>
                    </a>
                  </div>
                </span>
              </div>
              <div className={styles.homepageTile}>
                <div className={styles.infoImg}>
                  <p>O MNIE</p>
                </div>
                <div className={styles.text}>
                  <p>
                    Obecnie w prowadzonych przeze mnie grupach trenuje blisko
                    200 adeptów karate i kilkudziesięcioosobowa grupa miłośników
                    fitness. Spośród zawodników karate wielu z nich regularnie
                    startuje w turniejach osiągając sukcesy zarówno na arenie
                    krajowej jak i międzynarodowej. Dotychczasowy dorobek
                    sportowy moich wychowanków to blisko 600 pozycji medalowych
                    wywalczonych na różnego rodzaju zawodach Oyama Karate rangi
                    Mistrzostw Europy, Mistrzostw Polski, Pucharu Polski czy
                    turniejach regionalnych
                  </p>
                  <div className={styles.btnContainer}>
                    <button
                      type='button'
                      className={styles.readMoreBtn}
                      onClick={() => {
                        window.location.href = 'o-mnie';
                      }}
                    >
                      <span class={styles.transition}></span>
                      <span class={styles.gradient}></span>
                      <span class={styles.label}>Czytaj więcej...</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='container'>
              <h2 className={styles.sectionHeader}>
                PRZEGLĄDAJ GRUPY... I WYBIERZ ODPOWIEDNIĄ DLA SIEBIE
              </h2>
              <div className={styles.groupCardsContainer}>
                <GroupCard
                  title='Grupa przedszkolna'
                  description={`Grupę tworzą dzieci w wieku przedszkolnym (4 – 6 lat). 
                    Zajęcia to ćwiczenia ogólnorozwojowe z elementami Karate Oyama prowadzone
                    w miłej atmosferze. Tematyka zajęć i korzyści płynące z trenowania Karate Oyama: 
                    nauka podstawowych technik Karate Oyama,
                    ćwiczenia poprawiające ogólną sprawność fizyczną...`}
                  img={'../src/assets/homepage/photo3.webp'}
                  link='/grupy/grupa-przedszkolna'
                ></GroupCard>

                <GroupCard
                  title='Grupa początkująca'
                  description={`Aktualnie, zarówno w Katowicach jak i w Siemianowicach Śląskich, to ok. 20
                  osobowe grupy dzieci w przedziale wiekowym 7 – 12 lat, które rozpoczęły
                  poznawanie tajników Karate Oyama. Przygodę z karate w tych grupach mogą
                  rozpocząć dzieci do 14 roku życia. Zajęcia prowadzę na podstawie systemu szkolenia Oyama Karate...`}
                  img={'../src/assets/homepage/photo3.webp'}
                  link='/grupy/grupa-poczatkujaca'
                ></GroupCard>

                <GroupCard
                  title='Grupa średniozaawansowana'
                  description={`Aktualnie, zarówno w Katowicach jak i w Siemianowicach Śląskich, to ok.
                  20 osobowe grupy dzieci w przedziale wiekowym 8 - 14 lat, które mają już
                  za sobą przynajmniej dwa lata treningu. Zajęcia prowadzę na podstawie systemu szkolenia Oyama Karate, a także w
                  oparciu o swoje...`}
                  img={'../src/assets/homepage/photo3.webp'}
                  link='/grupy/grupa-sredniozaawansowana'
                ></GroupCard>

                <GroupCard
                  title='Grupa zawodnicza'
                  description={` W tej grupie treningi skierowane są głównie dla przygotowujących się do
                  zawodów w konkurencji Kumite (walka), ale również dla osób szukających
                  rekreacji ruchowej przy jednoczesnym zgłębianiu tajników Oyama Karate.
                  Podczas zajęć korzystamy ze sprzętu specjalistycznego i sportowego tj.
                  worki i tarcze treningowe...`}
                  img={'../src/assets/homepage/photo3.webp'}
                  link='/grupy/grupa-zawodnicza'
                ></GroupCard>

                <GroupCard
                  title='Grupa fitness'
                  description={`Na zajęcia w tej grupie licznie pojawiają się zarówno kobiety jak i
                  mężczyźni powyżej 16 roku życia. Ze względu na charakterystykę treningu
                  (wysoka intensywność) zajęcia nie przekraczają czasu 60 minut. Treningi
                  prowadzę na podstawie doświadczeń z dotychczasowej pracy szkoleniowej, a
                  także doświadczeń...`}
                  img={'../src/assets/homepage/photo3.webp'}
                  link='/grupy/grupa-fitness'
                ></GroupCard>
              </div>
            </div>
          </section>
        </main>
      </MasterLayout>
    </>
  );
}

const GroupCard = ({ title, description, img, link }) => {
  return (
    <div className={styles.groupCard}>
      <div className={styles.groupCardInner}>
        <div
          className={styles.groupCardFront}
          style={{
            backgroundImage: `background-image: linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.5)
          ),
          url(${img});`
          }}
        >
          <h3>{title.toUpperCase()}</h3>
        </div>
        <div className={styles.groupCardBack}>
          <h3>{title.toUpperCase()}</h3>
          <div className={styles.descAndBtn}>
            <p>{description}</p>
            <div className={styles.btnContainer}>
              <button
                type='button'
                className={styles.readMoreBtn}
                onClick={() => {
                  window.location.href = link;
                }}
              >
                <span className={styles.transition}></span>
                <span className={styles.gradient}></span>
                <span className={styles.label}>Czytaj więcej</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
