import React from 'react';
import GeneraslInfoPage from '../../../src/components/GeneralInfoPage/GeneraslInfoPage';
import img from '../../../src/assets/information/fitness_info_image.webp';
import styles from './index.module.scss';
import classNames from 'classnames';

function index() {
  return (
    <GeneraslInfoPage name={'FITNESS'}>
      <div className='container'>
        <div className={styles.textAndImgContainer}>
          <img src={img.src} alt='' className={styles.img} />
          <div className={styles.text}>
            <p>
              Fitness to styl życia przejawiający się troską o szeroko pojmowane
              zdrowie i sprawność fizyczną. W takim stylu życia niewątpliwie
              istotną rolę odgrywa świadoma i systematyczna aktywność fizyczna,
              która może być realizowana pod postacią różnego rodzaju ćwiczeń.
              Aby zwiększyć efektywność naszych działań w dbałości o zdrowie i
              sprawność fizyczną istotne jest aby dobrać właściwą formę
              aktywności fizycznej, na której opiera się trening fitness, do
              naszych potrzeb.
            </p>
            <br />
            <p>
              Proponowane formy zajęć fitness realizowane przeze mnie to
              treningi o charakterze interwałowym, obwodowym, funkcjonalnym,
              wzmacniającym i rozciągającym.
            </p>
          </div>
        </div>
        <div className={classNames(styles.text, styles.secText)}>
          <span>
            <p>Główne zalety treningu fitness:</p>
            <ul>
              <li>poprawa ogólnej kondycji fizycznej, </li>
              <li>
                wysoka skuteczność eliminacji nadmiaru tkanki tłuszczowej,
              </li>
              <li>wzmocnienie różnych grup mięśni,</li>
              <li>odstresowanie się i lepsze samopoczucie,</li>
              <li>budowanie i rozwijanie wytrzymałości, szybkości i siły,</li>
              <li>
                poprawa koordynacji ruchowej, skoczności, a także gibkości,
              </li>
              <li>krótki czas sesji treningowych,</li>
              <li>
                zmniejszenie ryzyka zachorowania na cukrzycę poprzez zwiększenie
                wrażliwości na insulinę.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </GeneraslInfoPage>
  );
}

export default index;
