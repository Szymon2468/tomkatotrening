import React from 'react';
import GeneralAboutPage from '../../../src/components/GeneralAboutPage/GeneralAboutPage';
import img from '../../../src/assets/groups/preschoolers_group_image.webp';
import styles from './index.module.scss';

const text = (
  <>
    <p>Grupę tworzą dzieci w wieku przedszkolnym (4 – 6 lat). </p>
    <br />
    <p>
      Zajęcia to ćwiczenia ogólnorozwojowe z elementami Karate Oyama prowadzone
      w miłej atmosferze :-)
    </p>
    <br />
    <p>Tematyka zajęć i korzyści płynące z trenowania Karate Oyama:</p>
    <ul className={styles.firstUl}>
      <li>nauka podstawowych technik Karate Oyama,</li>
      <li> ćwiczenia poprawiające ogólną sprawność fizyczną,</li>
      <li>zabawy ruchowe, integrujące i rozwijające różne cechy motoryczne,</li>
      <li>
        rozwijanie cech tj. szacunek, dyscyplina, punktualność,
        odpowiedzialność,
      </li>
      <li>
        kształcenie w dzieciach pewności siebie, stanowczości, umiejętności
        dążenia do celu, spokoju i koncentracji, a także systematyczności i
        dbania o porządek.
      </li>
    </ul>
  </>
);

function index() {
  return (
    <GeneralAboutPage
      name={'GRUPA PRZEDSZKOLNA'}
      imgSrc={img}
      imgAlt={''}
      text={text}
    />
  );
}

export default index;
