import styles from './Footer.module.scss';
import logo from '../../assets/Logo.webp';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.logoAndContactContainer}>
          <div className={styles.logo}>
            <Image src={logo.src} width={273} height={70} alt='logo'></Image>
          </div>

          <div className={styles.contact}>
            <p className={styles.footerLink}>Tomasz Mrowiec</p>
            <a href='tel:600-288-637'>
              <p className={styles.footerLink}>tel: 600 288 637</p>
            </a>
            <a href='mailto:tomkatotrening@wp.pl'>
              <p className={styles.footerLink}>e-mail: tomkatotrening@wp.pl</p>
            </a>
            <a
              href='https://www.facebook.com/tomkatotrening/'
              target={'_blank'}
              rel='noreferrer'
            >
              <p className={styles.footerLink}>
                Facebook: Tomasz Mrowiec tomkatotrening
              </p>
            </a>
          </div>
        </div>

        <div className={styles.footerSideMap}>
          <Link href='/o-mnie'>
            <p className={classNames(styles.bigFont, styles.hover)}>O MNIE</p>
          </Link>
          <p className={styles.bigFont}>GRUPY</p>
          <Link href='/grupy/grupa-przedszkolna'>
            <p className={classNames(styles.secColFirstItem, styles.hover)}>
              Przedszkolna
            </p>
          </Link>
          <Link href='/grupy/grupa-poczatkujaca'>
            <p className={classNames(styles.secColSecItem, styles.hover)}>
              Początkująca
            </p>
          </Link>
          <Link href='/grupy/grupa-sredniozaawansowana'>
            <p className={classNames(styles.secColThirdItem, styles.hover)}>
              Średniozaawansowana
            </p>
          </Link>
          <Link href='/grupy/grupa-zawodnicza'>
            <p className={classNames(styles.secColFourthItem, styles.hover)}>
              Zawodnicza
            </p>
          </Link>
          <Link href='/grupy/grupa-fitness'>
            <p className={classNames(styles.secColFifthItem, styles.hover)}>
              Fitness
            </p>
          </Link>
          <p className={styles.bigFont}>INFORMACJE</p>
          <Link href='/informacje/harmonogram'>
            <p className={classNames(styles.thirdColFirstItem, styles.hover)}>
              Harmonogram
            </p>
          </Link>
          <Link href='/informacje/Slaski-Klub-Karate-Goliat'>
            <p className={classNames(styles.thirdColSecItem, styles.hover)}>
              Śląski Klub Karate Goliat
            </p>
          </Link>
          <Link href='/informacje/Oyama-Karate'>
            <p className={classNames(styles.thirdColThirdItem, styles.hover)}>
              Oyama Karate
            </p>
          </Link>
          <Link href='/informacje/fitness'>
            <p className={classNames(styles.thirdColFourthItem, styles.hover)}>
              Fitness
            </p>
          </Link>
          <Link href='/kontakt'>
            <p className={classNames(styles.bigFont, styles.hover)}>KONTAKT</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
