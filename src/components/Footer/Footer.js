import styles from './Footer.module.scss';
import logo from '../../assets/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.logoAndContactContainer}>
          <div className={styles.logo}>
            <Image src={logo.src} width={273} height={70}></Image>
          </div>

          <div className={styles.contact}>
            <p>Tomasz Mrowiec</p>
            <a href='tel:600-288-637'>
              <p>tel: 600 288 637</p>
            </a>
            <a href='mailto:tomkatotrening@wp.pl'>
              <p>e-mail: tomkatotrening@wp.pl</p>
            </a>
            <p>Facebook: Tomasz Mrowiec tomkatotrening</p>
          </div>
        </div>

        <div className={styles.footerSideMap}>
          <Link href='/o-mnie'>
            <p className={classNames(styles.bigFont, styles.hover)}>O MNIE</p>
          </Link>
          <p className={styles.bigFont}>GRUPY</p>
          <Link href='/'>
            <p className={classNames(styles.secColFirstItem, styles.hover)}>
              Przedszkolna
            </p>
          </Link>
          <Link href='/'>
            <p className={classNames(styles.secColSecItem, styles.hover)}>
              Początkująca
            </p>
          </Link>
          <Link href='/'>
            <p className={classNames(styles.secColThirdItem, styles.hover)}>
              Średniozaawansowana
            </p>
          </Link>
          <Link href='/'>
            <p className={classNames(styles.secColFourthItem, styles.hover)}>
              Zawodnicza
            </p>
          </Link>
          <Link href='/'>
            <p className={classNames(styles.secColFifthItem, styles.hover)}>
              Fitness
            </p>
          </Link>
          <p className={styles.bigFont}>INFORMACJE</p>
          <Link href='/'>
            <p className={classNames(styles.thirdColFirstItem, styles.hover)}>
              Informacje
            </p>
          </Link>
          <Link href='/'>
            <p className={classNames(styles.thirdColSecItem, styles.hover)}>
              Śląski Klub Karate Goliat
            </p>
          </Link>
          <Link href='/'>
            <p className={classNames(styles.thirdColThirdItem, styles.hover)}>
              Oyama Karate
            </p>
          </Link>
          <Link href='/'>
            <p className={classNames(styles.thirdColFourthItem, styles.hover)}>
              Fitness
            </p>
          </Link>
          <Link href='/'>
            <p className={classNames(styles.bigFont, styles.hover)}>KONTAKT</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
