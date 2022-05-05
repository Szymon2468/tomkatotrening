import styles from './HamburgerMenu.module.scss';
import { Sling as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import Link from 'next/link';

function HamburgerMenu({ logoClicked }) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isHamburgerMenuOpen ? 'hidden' : 'inherit';
  }, [isHamburgerMenuOpen]);

  useEffect(() => {
    setIsHamburgerMenuOpen(false);
  }, [logoClicked]);

  const onNavClick = () => {
    setIsHamburgerMenuOpen(false);
  };

  return (
    <>
      <div className={styles.hamburgerMenuIcon}>
        <Hamburger
          toggled={isHamburgerMenuOpen}
          toggle={setIsHamburgerMenuOpen}
        />
      </div>

      {isHamburgerMenuOpen && (
        <div className={styles.hamburgerMenu}>
          <div className={styles.navItem} onClick={onNavClick}>
            <Link href='/o-mnie'>O MNIE</Link>
          </div>

          <Collapsible
            trigger={
              <div className={styles.navItem}>
                <a href='' className={styles.iconMargin}>
                  GRUPY
                </a>
              </div>
            }
          >
            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/'}>Przedszkolna</Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/'}>Początkująca</Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/'}>Średniozaawansowana</Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/'}>Zawodnicza</Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/'}>Fitness</Link>
            </div>
          </Collapsible>

          <Collapsible
            trigger={
              <div className={styles.navItem}>
                <a href='' className={styles.iconMargin}>
                  INFORMACJE
                </a>
              </div>
            }
          >
            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/'}>Informacje</Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/'}>Śląski Klub Karate Goliat</Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/'}>Oyama Karate</Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/'}>Fitness</Link>
            </div>
          </Collapsible>

          <div className={styles.navItem} onClick={onNavClick}>
            <Link href='/'>KONTAKT</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
