import React from 'react';
import GeneralAboutPage from '../../../src/components/GeneralAboutPage/GeneralAboutPage';
import img from '../../../src/assets/groups/mid_group_image.webp';
import styles from './index.module.scss';
import useWindowSize from '../../../src/hooks/useWindowSize';
import { NextSeo } from 'next-seo';

function Index() {
  const windowSize = useWindowSize();

  const text = (
    <>
      <p>
        Aktualnie, zarówno w Katowicach jak i w Siemianowicach Śląskich, to ok.
        20 osobowe grupy dzieci w przedziale wiekowym 8 - 14 lat, które mają już
        za sobą przynajmniej dwa lata treningu.
      </p>
      <br />
      <p>
        Zajęcia prowadzę na podstawie systemu szkolenia Oyama Karate, a także w
        oparciu o swoje kilkunastoletnie doświadczenie jako instruktora karate,
        zawodnika i pedagoga.
      </p>
      <br />
      {windowSize.width <= 1024 && windowSize.width > 768 && (
        <>
          <br />
          <br />
          <br />
        </>
      )}
      <p>Tematyka zajęć i korzyści płynące z trenowania Karate Oyama:</p>
      <ul className={styles.firstUl}>
        <li>
          doskonalenie poznanych technik (Kihon) i nauka kolejnych układów
          (Kata), a także układów z bronią (Kobudo),
        </li>
        <li>doskonalenie ciosów i kopnięć na tarczach treningowych,</li>
        <li> ćwiczenia poprawiające ogólną sprawność fizyczną,</li>
        <li>
          kształcenie w dzieciach pewności siebie, stanowczości, umiejętności
          dążenia do celu, spokoju i koncentracji,
        </li>
        <li>
          korzystamy z różnego rodzaju sprzętu specjalistycznego (ochraniacze,
          kaski) i sportowego (worki i tarcze treningowe, materace, liny, trx,
          hantelki, skakanki, itp.).
        </li>
      </ul>
      <br />
      <p>
        Nabytą wiedzę i wyćwiczone umiejętności dzieci potwierdzają na
        egzaminach na stopnie Kyu, jak również biorąc udział w rywalizacji
        sportowej, startując na zawodach Karate Oyama w różnych konkurencjach,
        tj. Kata, Kobudo, Walki na tarczach, Kumite.
      </p>
    </>
  );

  return (
    <>
      <NextSeo
        title='tomkatotrening'
        description='tomkatotrening - treningi Oyama Karate dla średniozaawansowanych'
        canonical='https://www.tomkatotrening.pl/grupy/grupa-sredniozaawansowana'
      />
      <GeneralAboutPage
        name={'GRUPA ŚREDNIOZAAWANSOWANA'}
        imgSrc={img}
        imgAlt={'Sensei Tomasz Mrowiec'}
        text={text}
        imgClass={styles.img}
        textClass={styles.text}
        contentClass={styles.content}
        headerClass={styles.header}
      />
    </>
  );
}

export default Index;
