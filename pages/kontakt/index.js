import MasterLayout from '../../src/components/MasterLayout/MasterLayout';
import styles from './contact.module.scss';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';

function ContactPage() {
  return (
    <MasterLayout isNavBackgroundTransparent={true}>
      <main>
        <section className={styles.section}>
          <div className={styles.landingPage}>
            <header>
              <div className={styles.topText}>
                <h1>SKONTAKTUJ SIĘ ZE MNĄ JUŻ TERAZ</h1>
                <h2>ZACZNIJ TRENOWAĆ DZISIAJ</h2>
                <p>Pierwszy trening bezpłatny</p>
              </div>
            </header>
          </div>
        </section>

        <section>
          <h2 className={styles.contactHeader}>
            Skontaktuj się ze mną przez telefon, maila lub facebooka
          </h2>
          <div className={styles.contactContainer}>
            <span>
              <div>
                <a href='tel:600-288-637' className={styles.contact}>
                  <BsTelephoneFill className={styles.svg} />
                  <p>600 288 637</p>
                </a>
              </div>

              <div>
                <a
                  href='mailto:tomkatotrening@wp.pl'
                  className={styles.contact}
                >
                  <IoMdMail className={styles.svg} />
                  <p>tomkatotrening@wp.pl</p>
                </a>
              </div>

              <div>
                <a
                  href='https://www.facebook.com/tomkatotrening/'
                  target={'_blank'}
                  rel='noreferrer'
                  className={styles.contact}
                >
                  <BsFacebook className={styles.svg} />
                  <p>Tomasz Mrowiec tomkatotrening</p>
                </a>
              </div>
            </span>
          </div>
        </section>
      </main>
    </MasterLayout>
  );
}

export default ContactPage;
