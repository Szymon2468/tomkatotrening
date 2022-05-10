import React from 'react';
import GeneraslInfoPage from '../../../src/components/GeneralInfoPage/GeneraslInfoPage';
import { schedule } from '../../../src/configs/schedule';
import { uuid } from 'uuidv4';
import styles from './index.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react/cjs/react.development';
import useWindowSize from '../../../src/hooks/useWindowSize';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';

const hours = ['16:00', '17:00', '17:45', '18:45', '19:00', '20:00'];
const allDays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];

function index() {
  const [days, setDays] = useState([]);

  const windowSize = useWindowSize();

  useEffect(() => {
    console.log(windowSize.width);
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

  const generateTable = () => {
    return hours.map((hour) => (
      <tr key={uuid()} className={styles.row}>
        <td className={styles.hour}>{hour}</td>
        {days.map((day) => (
          <td key={uuid()} className={styles.cell}>
            {schedule.find((el) => el.day === day && el.hour === hour) ? (
              <Training
                training={schedule.find(
                  (el) => el.day === day && el.hour === hour
                )}
              />
            ) : (
              ''
            )}
          </td>
        ))}
      </tr>
    ));
  };
  console.log('days', days);

  return (
    <GeneraslInfoPage name={'HARMONOGRAM'}>
      <div className='container'>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              <th className={styles.headerCell}>
                {windowSize.width <= 1440 && <MdArrowLeft />}
              </th>
              {days.map((day, index) => (
                <>
                  {index === days.length - 1 ? <MdArrowRight /> : <></>}
                  <th className={styles.headerCell} key={uuid()}>
                    {day}
                  </th>
                </>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {generateTable()}
            {/* {hours.map((hour) => (
            <tr key={uuid()}>
              <td>{hour}</td>
              {days.map((day) => (
                <td>
                  {schedule.find((el) => el.day === day && el.hour === hour)}
                </td>
              ))}
            </tr>
          ))} */}
          </tbody>
        </table>
      </div>
    </GeneraslInfoPage>
  );
}

const Training = ({ training }) => {
  return (
    <div className={styles.trainingContainer}>
      <p className={styles.groupName}>{training.groupName}</p>
      <p className={styles.city}>{training.city},</p>
      <p className={styles.address}>{training.address}</p>
      <Link href={training.link}>
        <p className={styles.link}>dowiedz się więcej o grupie</p>
      </Link>
    </div>
  );
};

export default index;
