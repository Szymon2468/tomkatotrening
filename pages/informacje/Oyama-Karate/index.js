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
      <div className='container'>
        <img src={img.src} alt='' className={styles.img} />
        <div className={styles.text}></div>
        <Link href='/'>
          <img
            src={linkImg.src}
            alt=''
            className={classNames(styles.img, styles.linkImg)}
          />
        </Link>
      </div>
    </GeneraslInfoPage>
  );
}

export default index;
