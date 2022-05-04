import styles from './Nav.module.scss';
import logo from '../../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

function Nav({ isNavBackgroundTransparent }) {
  return (
    <nav>
      <div
        className={classNames(
          styles.nav,
          isNavBackgroundTransparent && styles.transparentNav
        )}
      >
        <div className={styles.logo}>
          <Image src={logo.src} width={273} height={70}></Image>
        </div>
        <div className={styles.links}>
          <Link href='/'>
            <p className={styles.link}>O MNIE</p>
          </Link>
          <Link href='/'>
            <p className={styles.link}>GRUPY</p>
          </Link>
          <Link href='/'>
            <p className={styles.link}>INFORMACJE</p>
          </Link>
          <Link href='/'>
            <p className={styles.link}>KONTAKT</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
