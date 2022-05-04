import styles from './Nav.module.scss';
import logo from '../../assets/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import Dropdown from './Dropdown/Dropdown.js';
import useWindowSize, { windowSize } from '../../hooks/useWindowSize';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import { useState } from 'react/cjs/react.development';

function Nav({ isNavBackgroundTransparent }) {
  const windowSize = useWindowSize();
  const [logoClicked, setLogoClicked] = useState(false);

  const groupOptions = [
    'Przedszkolna',
    'Początkująca',
    'Średniozaawansowana',
    'Zawodnicza',
    'Fitness'
  ];

  const infoOptions = [
    'Informacje',
    'Śląski Klub Karate Goliat',
    'Oyama Karate',
    'Fitness'
  ];

  return (
    <nav>
      <div
        className={classNames(
          styles.nav,
          isNavBackgroundTransparent && styles.transparentNav
        )}
      >
        <div className={styles.logo}>
          <Image
            src={logo.src}
            width={273}
            height={70}
            onClick={() => {
              setLogoClicked(!logoClicked);
            }}
          ></Image>
        </div>
        {windowSize.width >= 1024 && (
          <div className={styles.links}>
            <div className={styles.linkContainer}>
              <Link href='/'>
                <p className={styles.link}>O MNIE</p>
              </Link>
            </div>

            <div className={styles.linkContainer}>
              <Dropdown title={'GRUPY'} options={groupOptions} />
            </div>

            <div className={styles.linkContainer}>
              <Dropdown title={'INFORMACJE'} options={infoOptions} />
            </div>

            <div className={styles.linkContainer}>
              <Link href='/'>
                <p className={styles.link}>KONTAKT</p>
              </Link>
            </div>
          </div>
        )}
        {windowSize.width < 1024 && (
          <div className={styles.hamburgerMenu}>
            <HamburgerMenu logoClicked={logoClicked} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
