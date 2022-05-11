import MasterLayout from '../MasterLayout/MasterLayout';
import styles from './GeneralAboutPage.module.scss';

function GeneralAboutPage({ name, imgSrc, imgAlt, text, isImgLast }) {
  return (
    <MasterLayout isNavBackgroundTransparent={false}>
      <main>
        <section>
          <header className={styles.headerContainer}>
            <div className={styles.belt}></div>
            <h1 className={styles.header}>{name}</h1>
            <div className={styles.belt}></div>
          </header>

          <main className='container'>
            <div className={styles.content}>
              {!isImgLast && <img src={imgSrc.src} alt={imgAlt} />}
              <div className={styles.text}>{text}</div>
              <div style={{ clear: 'left' }}></div>
              {isImgLast && <img src={imgSrc.src} alt={imgAlt} />}
            </div>
          </main>
        </section>
      </main>
    </MasterLayout>
  );
}

export default GeneralAboutPage;
