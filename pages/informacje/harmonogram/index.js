import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import { uuid } from 'uuidv4';
import GeneraslInfoPage from '../../../src/components/GeneralInfoPage/GeneraslInfoPage';
import { schedule } from '../../../src/configs/schedule';
import useWindowSize from '../../../src/hooks/useWindowSize';
import styles from './index.module.scss';

const hours = ['16:00', '17:00', '17:45', '18:45', '19:00', '20:00'];
const allDays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];

function Index() {
  const [days, setDays] = useState([]);

  const windowSize = useWindowSize();
  const groupFilterRef = useRef();
  const placeFilterRef = useRef();

  useEffect(() => {
    if (windowSize.width <= 1440 && windowSize.width > 1024) {
      setDays(['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek']);
    } else if (windowSize.width <= 1024 && windowSize.width > 768) {
      setDays(['Poniedziałek', 'Wtorek', 'Środa']);
    } else if (windowSize.width <= 768 && windowSize.width > 576) {
      setDays(['Poniedziałek', 'Wtorek']);
    } else if (windowSize.width <= 576) {
      setDays(['Poniedziałek']);
    } else if (windowSize.width > 1440) {
      setDays(['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek']);
    }
  }, [windowSize.width]);

  const [groupFilter, setGroupFilter] = useState('wszystkie');
  const [placeFilter, setPlaceFilter] = useState('wszystkie');

  const handleRightArrowClick = () => {
    const lastElIndex = allDays.findIndex((el) => el === days[days.length - 1]);
    if (lastElIndex >= 4) {
      return;
    }
    let result = [];
    for (let i = lastElIndex - days.length + 2; i < lastElIndex + 2; i++) {
      result.push(allDays[i]);
    }
    setDays(result);
    return;
  };

  const handleLeftArrowClick = () => {
    const firstElIndex = allDays.findIndex((el) => el === days[0]);
    if (firstElIndex <= 0) {
      return;
    }
    let result = [];
    for (let i = firstElIndex - 1; i < firstElIndex - 1 + days.length; i++) {
      result.push(allDays[i]);
    }
    setDays(result);
    return;
  };

  const generateAppropriateTraining = (day, hour) => {
    if (
      schedule.find(
        (el) =>
          el.day === day &&
          el.hour === hour &&
          ((groupFilter !== el.groupName && groupFilter !== 'wszystkie') ||
            (placeFilter !== el.address && placeFilter !== 'wszystkie'))
      )
    ) {
      return (
        <Training
          textColor={'#8f8f8f'}
          training={schedule.find((el) => el.day === day && el.hour === hour)}
        />
      );
    } else if (schedule.find((el) => el.day === day && el.hour === hour)) {
      return (
        <Training
          textColor={''}
          training={schedule.find((el) => el.day === day && el.hour === hour)}
        />
      );
    }
    return '';
  };

  const generateTable = () => {
    console.log(groupFilter, placeFilter);
    return hours.map((hour) => (
      <tr key={uuid()} className={styles.row}>
        <td className={styles.hour}>{hour}</td>
        {days.map((day) => (
          <td key={uuid()} className={styles.cell}>
            {generateAppropriateTraining(day, hour)}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <GeneraslInfoPage name={'HARMONOGRAM'}>
      <div className='container'>
        <div className={styles.filtersContainer}>
          <h2>Filtruj harmonogram</h2>
          <div className={styles.filters}>
            <div className={styles.filter}>
              <label htmlFor='groupSelect'>Grupa: </label>
              <select
                ref={groupFilterRef}
                name='groupSelect'
                id='groupSelect'
                defaultValue={'wszystkie'}
                onChange={() => {
                  setGroupFilter(groupFilterRef.current.value);
                }}
              >
                <option value={'wszystkie'}>wszystkie</option>
                <option value={'Grupa przedszkolna'}>grupa przedszkolna</option>
                <option value={'Grupa początkująca'}>grupa początkująca</option>
                <option value={'Grupa średniozaawansowana'}>
                  grupa średniozaawansowana
                </option>
                <option value={'Grupa zawodnicza'}>grupa zawodnicza</option>
                <option value={'Grupa fitness'}>grupa fitness</option>
              </select>
            </div>

            <div className={styles.filter}>
              <label htmlFor='placeSelect'>Miejsce: </label>
              <select
                ref={placeFilterRef}
                name='placeSelect'
                id='placeSelect'
                defaultValue={'wszystkie'}
                onChange={() => {
                  setPlaceFilter(placeFilterRef.current.value);
                }}
              >
                <option value={'wszystkie'}>wszystkie</option>
                <option value={'ul. Ordona 3a - Szkoła Podstawowa Nr 62'}>
                  Katowice, ul. Ordona 3a
                </option>
                <option
                  value={'ul. Niedpodległości 47 - Szkoła Podstawowa Nr 1'}
                >
                  Siemianowice Śląskie, ul. Niedpodległości 47
                </option>
                <option
                  value={'ul. Iłłakowiczówny 13 - Szkoła Podstawowa Nr 36'}
                >
                  Katowice, ul. Iłłakowiczówny 13
                </option>
              </select>
            </div>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              <th className={styles.headerCell}>
                {windowSize.width <= 1440 && (
                  <MdArrowLeft
                    className={styles.arrow}
                    onClick={() => handleLeftArrowClick()}
                  />
                )}
              </th>
              {days.map((day, index) => (
                <>
                  <th className={styles.headerCell} key={uuid()}>
                    {index === days.length - 1 && windowSize.width <= 1440 ? (
                      <div className={styles.arrowContainer}>
                        {day}
                        <MdArrowRight
                          className={classNames(
                            styles.arrow,
                            styles.rightArrow
                          )}
                          onClick={() => handleRightArrowClick()}
                        />
                      </div>
                    ) : (
                      <span>{day}</span>
                    )}
                  </th>
                </>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tableBody}>{generateTable()}</tbody>
        </table>

        <h3>Kilka przydatnych informacji...</h3>
        <br />
        <p>
          Jeżeli chcesz zapisać się do jednej z grup skontaktuj się ze mną
          mailowo, telefonicznie lub osobiście przyjdź na salę treningową.
          Pierwszy trening jest całkowicie bezpłatny tak więc nie ma żadnego
          ryzyka - postaram się abyś został / została z nami na stałe.
        </p>
        <br />
        <p>
          Na pierwsze zajęcia należy zabrać ze sobą wygodny strój sportowy
          (krótkie spodenki / spodnie dresowe oraz t-shirt).{' '}
        </p>
        <br />
        <p>
          Zajęcia w naszym Klubie skierowane są do wszystkich, którzy nie
          szukają wymówek i chcą aktywnie spędzać wolny czas, dbając tym samym o
          dobrą formę i samopoczucie.{' '}
        </p>
        <br />
        <p>
          Koszt treningów karate wynosi 120zł,-/miesiąc + jednorazowa opłata na
          dany sezon w wysokości 40zł,- do Klubu oraz organizacji Oyama PFK
          (Oyama Polska Federacja Karate) zawierającą również roczną składkę
          ubezpieczeniową. W ramach jednej składki można trenować do 5 razy w
          tygodniu we wszystkich naszych lokalizacjach! Istnieje możliwość
          skorzystania ze zniżki rodzinnej.
        </p>
        <br />
        <p>
          Koszt zajęć fitness wynosi 110zł,-/miesiąc lub 20zł,-/jednorazowe
          wejście. Dla osób kontynuujących udział w treningach miesięczna
          składka wynosi 100zł,-
        </p>
        <br />
        <h3 className={styles.important}>WAŻNE!</h3>
        <p>
          Warunkiem dopuszczjącym do uczestnictwa w zajęciach karate i fitness
          jest złożenie `&quot;` Deklaracji Klubowej/Członkowskiej `&quot;` na
          dany sezon treningowy (2020/2021) oraz bezwzględne zapoznanie się z
          `&quot;` Regulaminem Śląskiego Klubu Karate Goliat `&quot;`, `&quot;`
          Regulaminem dotyczącym składek `&quot;`, `&quot;` Regulaminem Covid-19
          `&quot;` i `&quot;` Klauzulą RODO `&quot;`! Regulaminy i dokumenty do
          pobrania dostępne są na oficjalnej stronie Klubu:{' '}
          <a
            href='http://kswgoliat.pl/dokumenty-do-pobrania'
            className={styles.documentLink}
          >
            http://kswgoliat.pl/dokumenty-do-pobrania
          </a>
        </p>

        <h2 className={styles.sectionHeader}>
          TUTAJ ZNAJDZIESZ NASZE TRENINGI
        </h2>

        <div className={styles.maps}>
          <div className={styles.mapContainer}>
            <p>KATOWICE, ul. Iłłakowiczówny 13</p>{' '}
            <p>Szkoła Podstawowa Nr 36</p>
            <div className={styles.map}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.0162758332103!2d19.017627815708277!3d50.27295470801946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce23bc3915c7%3A0xa135506eade90a50!2zScWCxYJha293aWN6w7N3bnkgMTMsIDQwLTEzNCBLYXRvd2ljZQ!5e0!3m2!1sen!2spl!4v1652262719943!5m2!1sen!2spl'
                width='100%'
                height='100%'
                allowFullScreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <p>KATOWICE, ul. Ordona 3a</p> <p>Szkoła Podstawowa Nr 62</p>
            <div className={styles.map}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.2344263976033!2d19.02593051570814!3d50.268881308312245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce2ff1d84be5%3A0x5ffa1290e9d8af09!2sOrdona%203A%2C%2040-164%20Katowice!5e0!3m2!1sen!2spl!4v1652262955133!5m2!1sen!2spl'
                width='100%'
                height='100%'
                allowFullScreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <p>SIEMIANOWICE ŚLĄSKIE, ul. Niepodległości 47</p>{' '}
            <p>Szkoła Podstawowa Nr 1</p>
            <div className={styles.map}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.51611640858!2d19.005667615709125!3d50.300959806006176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d1f4f3468757%3A0xd3330ea42f6f57b4!2zTmllcG9kbGVnxYJvxZtjaSA0NywgNDEtMTAwIFNpZW1pYW5vd2ljZSDFmmzEhXNraWU!5e0!3m2!1sen!2spl!4v1652263002392!5m2!1sen!2spl'
                width='100%'
                height='100%'
                allowFullScreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>

        <h2 className={styles.sectionHeader}>
          SKONTAKTUJ SIĘ ZE MNĄ JUŻ TERAZ
        </h2>
        <div className={styles.contactContainer}>
          <span>
            <div className={styles.contact}>
              <BsTelephoneFill />
              <a href='tel:600-288-637'>
                <p>600 288 637</p>
              </a>
            </div>
            <div className={styles.contact}>
              <IoMdMail />
              <a href='mailto:tomkatotrening@wp.pl'>
                <p>tomkatotrening@wp.pl</p>
              </a>
            </div>
          </span>
        </div>
      </div>
    </GeneraslInfoPage>
  );
}

const Training = ({ training, textColor }) => {
  return (
    <div className={styles.trainingContainer}>
      <p className={styles.groupName} style={{ color: textColor }}>
        {training.groupName}
      </p>
      <p style={{ color: textColor }} className={styles.city}>
        {training.city},
      </p>
      <p style={{ color: textColor }} className={styles.address}>
        {training.address}
      </p>
      <Link href={training.link}>
        <p className={styles.link} style={{ color: textColor }}>
          dowiedz się więcej o grupie
        </p>
      </Link>
      {training.additionalInfo && (
        <p className={styles.additionalInfo}>{training.additionalInfo}</p>
      )}
    </div>
  );
};

{
  /* {hours.map((hour) => (
            <tr key={uuid()}>
              <td>{hour}</td>
              {days.map((day) => (
                <td>
                  {schedule.find((el) => el.day === day && el.hour === hour)}
                </td>
              ))}
            </tr>
          ))} */
}

export default Index;
