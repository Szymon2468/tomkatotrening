import styles from './about.module.scss';
import photo1 from '../../src/assets/homepage/photo1.webp';
import photo2 from '../../src/assets/homepage/photo2.webp';
import photo3 from '../../src/assets/homepage/photo3.webp';
import MasterLayout from '../../src/components/MasterLayout/MasterLayout';
import classNames from 'classnames';

function About() {
  return (
    <MasterLayout isNavBackgroundTransparent={true}>
      <main>
        <section className={styles.section}>
          <div className={styles.landingPage}>
            <header>
              <div>
                <h1>POZNAJ SWOJEGO NOWEGO TRENERA</h1>
              </div>
            </header>
          </div>
        </section>

        <section>
          <div className='container'>
            <h2 className={styles.infoTitle}>
              Sensei Tomasz Mrowiec, 4 Dan Oyama Karate
            </h2>
            <div className={styles.belt}></div>

            <div className={classNames(styles.tile, styles.firstTile)}>
              <img
                alt='Sensei Tomasz Mrowiec'
                src={photo1.src}
                height={360}
                width={270}
                className={styles.infoImg}
              />
              <div className={styles.text}>
                <p>
                  Początek lat dziewięćdziesiątych to start mojej przygody ze
                  sztukami i sportami walki. Od ponad 20 lat czynnie prowadzę
                  treningi Oyama Karate dla dzieci, młodzieży i dorosłych, a
                  także zajęcia fitness.
                </p>
                <br />
              </div>
              <div className={styles.textList}>
                <p>Wykształcenie i uprawnienia:</p>
                <ul>
                  <li>Magister na kierunku Pedagogika,</li>
                  <li>Trener II klasy Oyama Karate,</li>
                  <li>Instruktor Sportu - Oyama Karate,</li>
                  <li>Instruktor Sportu - Fitness,</li>
                  <li>
                    Trener osobisty - kurs ukończony w Akademii Mistrzostwa
                    Sportowego,
                  </li>
                  <li>Licencjonowany sędzia maty w Kumite w Oyama PFK,</li>
                  <li>Licencjonowany sędzia boczny w Kata w Oyama PFK,</li>
                  <li>
                    Opiekun i kierownik placówek wypoczynku dzieci i młodzieży.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.lightBg}>
            <div className='container'>
              <div className={classNames(styles.tile, styles.midTile)}>
                <div className={styles.text}>
                  <p>
                    W roku 2003 przed Mistrzem Soshu Shigeru Oyama, 10 Dan
                    pomyślnie zdałem egzamin na 1 Dan. Kolejny stopień 2 Dan
                    zdobyłem w roku 2007, zaś 3 Dan osiągnąłem w roku 2016. Na
                    stopień 4 Dan zdałem egzamin w 2021 roku.
                  </p>
                  <br />
                </div>

                <div className={styles.textList}>
                  <p>
                    Podczas krótkiej przygody w rywalizacji sportowej udało się
                    wywalczyć:
                  </p>
                  <ul>
                    <li>
                      III miejsce na Pucharze Śląska w Kata, Chorzów 2001,
                    </li>
                    <li>
                      III miejsce na Mistrzostwach Polski w Kata, Oświęcim 2003,
                    </li>
                    <li>
                      III miejsce na Mistrzostwach Polski w Kata, Turek 2004,
                    </li>
                    <li>
                      I miejsce na Mistrzostwach Polski w Kata, Mielno 2005,
                    </li>
                    <li>
                      I miejsce na Mistrzostwach Polski w Kata, Chorzów 2006,
                    </li>
                    <li>
                      III miejsce na Pucharze Polski „Oyama Top” w Kumite,
                      Jelenia Góra 2006,
                    </li>
                    <li>
                      I miejsce na Mistrzostwach Polski w Kumite, Osielsko 2006,
                    </li>
                    <li>
                      I miejsce na Mistrzostwach Polski w Kumite, Brzeszcze
                      2007.
                    </li>
                  </ul>
                </div>
                <img
                  src={photo2.src}
                  alt='Sensei Tomasz Mrowiec'
                  height={360}
                  width={270}
                  className={styles.infoImgRight}
                />
              </div>
            </div>
          </div>

          <div className='container'>
            <div className={classNames(styles.tile, styles.thirdTile)}>
              <img
                src={photo3.src}
                alt='Sensei Tomasz Mrowiec'
                height={270}
                width={480}
                className={styles.infoImg}
              />
              <div className={styles.text}>
                <p>
                  Obecnie w prowadzonych przeze mnie grupach trenuje blisko 200
                  adeptów karate i kilkudziesięcioosobowa grupa miłośników
                  fitness. Spośród zawodników karate wielu z nich regularnie
                  startuje w turniejach osiągając sukcesy zarówno na arenie
                  krajowej jak i międzynarodowej. Dotychczasowy dorobek sportowy
                  moich wychowanków to blisko 600 pozycji medalowych
                  wywalczonych na różnego rodzaju zawodach Oyama Karate rangi
                  Mistrzostw Europy, Mistrzostw Polski, Pucharu Polski czy
                  turniejach regionalnych
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MasterLayout>
  );
}

export default About;
