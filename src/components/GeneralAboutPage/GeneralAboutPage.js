import MasterLayout from '../MasterLayout/MasterLayout';
import styles from './GeneralAboutPage.module.scss';
import classNames from 'classnames';

function GeneralAboutPage({
  name,
  imgSrc,
  imgAlt,
  text,
  contentClass,
  imgClass,
  textClass,
  headerClass
}) {
  return (
    <MasterLayout isNavBackgroundTransparent={false}>
      <main>
        <section>
          <header className={styles.headerContainer}>
            <div className={styles.belt}></div>
            <h1 className={classNames(styles.header, headerClass)}>{name}</h1>
            <div className={styles.belt}></div>
          </header>

          <main className='container'>
            <div className={classNames(styles.content, contentClass)}>
              <img src={imgSrc.src} alt={imgAlt} className={imgClass} />
              <div className={classNames(styles.text, textClass)}>{text}</div>
              <div style={{ clear: 'left' }}></div>
            </div>
          </main>
        </section>
      </main>
    </MasterLayout>
  );
}

export default GeneralAboutPage;
