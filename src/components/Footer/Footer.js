import styles from './Footer.module.scss';
import logo from '../../assets/Logo.png';
import Image from 'next/image';

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
            <p>tel: 600 288 637</p>
            <p>e-mail: tomkatotrening@wp.pl</p>
            <p>Facebook: Tomasz Mrowiec tomkatotrening</p>
          </div>
        </div>

        <div className={styles.footerSideMap}>
          <p className={styles.bigFont}>O MNIE</p>
          <p className={styles.bigFont}>GRUPY</p>
          <p className={styles.secColFirstItem}>Przedszkolna</p>
          <p className={styles.secColSecItem}>Początkująca</p>
          <p className={styles.secColThirdItem}>Średniozaawansowana</p>
          <p className={styles.secColFourthItem}>Zawodnicza</p>
          <p className={styles.secColFifthItem}>Fitness</p>
          <p className={styles.bigFont}>INFORMACJE</p>
          <p className={styles.thirdColFirstItem}>Informacje</p>
          <p className={styles.thirdColSecItem}>Śląski Klub Karate Goliat</p>
          <p className={styles.thirdColThirdItem}>Oyama Karate</p>
          <p className={styles.thirdColFourthItem}>Fitness</p>
          <p className={styles.bigFont}>KONTAKT</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
