import MasterLayout from '../MasterLayout/MasterLayout';
import styles from './GeneralInfoPage.module.scss';

function GeneraslInfoPage({ children, name }) {
  return (
    <MasterLayout isNavBackgroundTransparent={false}>
      <main>
        <section>
          <header className={styles.headerContainer}>
            <div className={styles.belt}></div>
            <h1 className={styles.header}>{name}</h1>
            <div className={styles.belt}></div>
          </header>
        </section>
        <section>{children}</section>
      </main>
    </MasterLayout>
  );
}

export default GeneraslInfoPage;
