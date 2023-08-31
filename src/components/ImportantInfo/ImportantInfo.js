import classNames from 'classnames';
import styles from './ImportantInfo.module.scss';

const ImportantInfo = ({ children }) => {
  return (
    <section className={styles.importantInfoContainer}>
      <div className='container'>{children}</div>
    </section>
  );
};

export default ImportantInfo;
