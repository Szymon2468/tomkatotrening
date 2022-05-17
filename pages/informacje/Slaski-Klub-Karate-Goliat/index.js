import GeneraslInfoPage from '../../../src/components/GeneralInfoPage/GeneraslInfoPage';
import styles from './index.module.scss';
import img from '../../../src/assets/information/skk_goliat_info_image.webp';
import linkImg from '../../../src/assets/information/skk_goliat_info_image_link.webp';
import classNames from 'classnames';

function Index() {
  return (
    <GeneraslInfoPage name={'ŚLĄSKI KLUB KARATE GOLIAT'}>
      <div className={classNames('container', styles.container)}>
        <div className={styles.textAndImgContainer}>
          <img src={img.src} alt='' className={styles.img} />
          <p className={styles.text1}>
            Śląski Klub Karate `&quot;` Goliat `&quot;` powstał w 1992r. Został
            założony przez obecnego Prezesa Klubu, Sensei Jerzego Walaszczyka, 4
            Dan. Jesteśmy największym Klubem Oyama Karate na terenie Górnego
            Śląska i jednym z największych w Polsce. Posiadamy ok. 50 sekcji w
            największych miastach regionu (Katowice, Chorzów, Siemianowice
            Śląskie, Świętochłowice, Ruda Śląska, Bytom, Tychy, Gliwice,
            Orzesze).
          </p>

          <p className={styles.text2}>
            Posiadamy grupę wykwalifikowanych instruktorów, w tym kilkunastu z
            czarnymi pasami. Od 1995r. zdobyliśmy na Mistrzostwach Polski i
            Pucharach Polski ponad 400 medali. Obecnie w dorobku mamy ponad 2000
            medali, które wywalczyliśmy na różnego rodzaju zawodach krajowych i
            międzynarodowych.
          </p>
        </div>

        <div className={styles.linkContainer}>
          <div className={styles.text}>
            <p>
              Więcej informacji dotyczących Śląskiego Klubu Karate `&quot;`
              Goliat `&quot;` znajdziesz na oficjalnej stronie{' '}
              <a href='www.karategoliat.pl' target='_blank' rel='noreferrer'>
                www.karategoliat.pl
              </a>
            </p>
          </div>

          <a href='http://kswgoliat.pl/' target='_blank' rel='noreferrer'>
            <img
              src={linkImg.src}
              alt=''
              className={classNames(styles.img, styles.linkImg)}
            />
          </a>
        </div>
      </div>
    </GeneraslInfoPage>
  );
}

export default Index;
