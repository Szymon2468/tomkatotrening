import React from 'react';
import GeneralAboutPage from '../../../src/components/GeneralAboutPage/GeneralAboutPage';
import img from '../../../src/assets/groups/begginers_group_image.webp';
import styles from './index.module.scss';

const text = (
  <>
    <p>
      Aktualnie, zarówno w Katowicach jak i w Siemianowicach Śląskich, to ok. 20
      osobowe grupy dzieci w przedziale wiekowym 7 – 12 lat, które rozpoczęły
      poznawanie tajników Karate Oyama. Przygodę z karate w tych grupach mogą
      rozpocząć dzieci do 14 roku życia.
    </p>
    <br />
    <p>
      Zajęcia prowadzę na podstawie systemu szkolenia Oyama Karate, a także w
      oparciu o swoje kilkunastoletnie doświadczenie jako instruktora karate,
      zawodnika i pedagoga.
    </p>
    <br />
    <p>
      Tematyka zajęć i korzyści płynące z trenowania Karate Oyama: - nauka
      podstawowych technik (Kihon) i pierwszych układów (Kata), - ćwiczenia
      poprawiające ogólną sprawność fizyczną realizowane w formie zabaw i
      rywalizacji sportowej, - kształcenie w dzieciach wartości cenionych w
      codziennym życiu tj. szacunek, dyscyplina, punktualność, systematyczność,
      dbanie o porządek, - kształcenie w dzieciach pewności siebie,
      stanowczości, umiejętności dążenia do celu, spokoju i koncentracji.
    </p>
    <br />
    <p>
      Korzystamy z różnego rodzaju sprzętu sportowego tj. worków i tarcz
      treningowych, materacy, piłek, skakanek, lin, trx, ławeczek itp.
    </p>
    <br />
    <p>
      Potwierdzeniem nabytych umiejętności przez adeptów karate jest pomyślne
      zdanie egzaminów na stopnie Kyu.
    </p>
  </>
);

function Index() {
  return (
    <GeneralAboutPage
      name={'GRUPA POCZĄTKUJĄCA'}
      imgSrc={img}
      imgAlt={'Sensei Tomasz Mrowiec'}
      text={text}
      imgClass={styles.img}
      textClass={styles.text}
      contentClass={styles.content}
    />
  );
}

export default Index;
