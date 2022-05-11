import React from 'react';
import GeneralAboutPage from '../../../src/components/GeneralAboutPage/GeneralAboutPage';
import img from '../../../src/assets/groups/fighters_group_image.webp';
import styles from './index.module.scss';
import useWindowSize from '../../../src/hooks/useWindowSize';

function index() {
  const windowSize = useWindowSize();

  const text = (
    <>
      <p>
        W tej grupie treningi skierowane są głównie dla przygotowujących się do
        zawodów w konkurencji Kumite (walka), ale również dla osób szukających
        rekreacji ruchowej przy jednoczesnym zgłębianiu tajników Oyama Karate.
        Podczas zajęć korzystamy ze sprzętu specjalistycznego i sportowego tj.
        worki i tarcze treningowe, łapy bokserskie, liny, trx, skakanki, różnego
        rodzaju piłki, hantelki, itp.
      </p>
      <br />
      <p>Treningi prowadzę na podstawie autorskiego programu treningowego.</p>
      <br />
      <p>Zakres tematyczny zajęć:</p>
      <ul className={styles.firstUl}>
        <li>
          dużo ćwiczeń budujących i rozwijających wytrzymałość, szybkość i siłę,
          a także gibkość, skoczność czy koordynację ruchową,
        </li>
        <li>
          nacisk na technikę użytkową (sportową i nie tylko), poruszanie się,
          garda, techniki rąk oraz nóg, praca kombinacyjna na podstawie
          poznanych technik,
        </li>
        <li>
          nauka technik i układów Karate Oyama (Kihon, Kata), jak również
          aplikacje walki utylitarnej, jednak stanowią one mniejszą część zajęć,
        </li>
        <li>
          spora część treningów realizowana jest przy użyciu w/w sprzętu
          sportowego, jak również przy użyciu ochraniaczy na ręce, nogi oraz
          kasków.
        </li>
      </ul>
      <br />
      {windowSize.width > 1440 && (
        <>
          <br />
          <br />
          <br />
        </>
      )}
      <p>Korzyści płynące z treningu w tej grupie:</p>
      <ul>
        <li>poznanie technik Karate Oyama,</li>
        <li>wzmocnienie różnych grup mięśni,</li>
        <li>
          poprawa ogólnej kondycji (zwiększenie wydolności) i koordynacji
          ruchowej,
        </li>
        <li>odstresowanie się i lepsze samopoczucie.</li>
      </ul>
    </>
  );

  return (
    <GeneralAboutPage
      name={'GRUPA ZAWODNICZA'}
      imgSrc={img}
      imgAlt={''}
      text={text}
      imgClass={styles.img}
      textClass={styles.text}
      contentClass={styles.content}
    />
  );
}

export default index;
