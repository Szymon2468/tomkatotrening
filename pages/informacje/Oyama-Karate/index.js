import React from 'react';
import GeneraslInfoPage from '../../../src/components/GeneralInfoPage/GeneraslInfoPage';
import styles from './index.module.scss';
import img from '../../../src/assets/information/oyama_karate_info_image.webp';
import linkImg from '../../../src/assets/information/oyama_karate_info_image_link.webp';
import classNames from 'classnames';
import Link from 'next/link';

function index() {
  return (
    <GeneraslInfoPage name={'OYAMA KARATE'}>
      <div className={classNames('container', styles.gridContainer)}>
        <img src={img.src} alt='' className={styles.img} />

        <div className={styles.text}>
          <p>
            Twórcą naszego stylu jest Wielki Mistrz Shigeru OYAMA, 10 dan
            (1935-2016) - legenda światowego karate. Po kilkudziesięciu latach
            praktyki i studiów nad dalekowschodnimi systemami walki stworzył
            neoklasyczną dyscyplinę, opartą z jednej strony na japońskiej
            tradycji karate, z drugiej strony na najbardziej skutecznych i
            sprawdzonych formach walki.
          </p>
          <br />
          <p>
            Styl OYAMA jest rozwijany pod kątem sztuki i samoobrony oraz
            wielokonkurencyjnej dyscypliny sportowej. Shigeru Oyama wprowadził
            szybkie przemieszczanie się, wyprzedzanie ataku przeciwnika i
            zejścia z linii ciosu wraz z równoczesnym kontratakiem. Takiej
            filozofii walki podporządkował cały system szkolenia. Zmienił
            niektóre bloki, uderzenia oraz formy, rozwinął pracę nóg i położył
            duży nacisk na rotacyjną pracę ciała. Nowe autorskie kihon kata
            stanowią pomost pomiędzy uczeniem podstaw a realną walką.
          </p>
        </div>
        <Link href='www.oyama-karate.pl'>
          <img src={linkImg.src} alt='' className={styles.linkImg} />
        </Link>

        <div className={styles.info}>
          <p>
            W połączeniu z zaawansowanymi ponad stylowymi formami, uznanymi za
            klasykę karate, jak np. Seienchin czy Kanku-dai, tworzą
            reprezentatywny obraz kształtowania się kontaktowego karate na
            przełomie XX i XXI wieku. Zaawansowani karateka praktykują także
            oryginalne formy z bronią (Bo, Tonfa i Sai). Są przedmiotem studiów,
            praktyki oraz jednym z najważniejszych czynników pozwalających
            pojmować styl Oyama jako sztukę walki oraz oryginalną dyscyplinę
            sportu.
          </p>
          <br />
          <p>
            Więcej informacji dotyczącej Oyama Karate znajdziesz na oficjalnej
            stronie{' '}
            <a className={styles.link} href='www.oyama-karate.pl'>
              www.oyama-karate.pl
            </a>
          </p>
        </div>
      </div>
    </GeneraslInfoPage>
  );
}

export default index;
