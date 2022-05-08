import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Dropdown.module.scss';

function Dropdown({ options, title, paths }) {
  const [selected, setSelected] = useState(-1);
  const [active, setActive] = useState(false);

  const toggleDropdown = () => {
    setActive(!active);
  };

  const handleClick = (i) => {
    setSelected(i);
  };

  const renderOptions = () => {
    if (!options) {
      return;
    }

    let result = [];

    options.map((option, i) => {
      result.push(
        <Link href={`/${paths[i]}`}>
          <li
            onClick={(evt) => handleClick(i)}
            key={i}
            className={`
            ${styles.dropdownListItem}
            ${i === selected ? styles.dropdownListItemActive : ''}`}
          >
            <p className='smaller'>{option}</p>
          </li>
        </Link>
      );
    });

    return result;
  };

  return (
    <>
      <div className={styles.dropdown} onMouseLeave={() => setActive(false)}>
        <div
          onMouseEnter={() => setActive(true)}
          className={classNames(
            styles.dropdownToggle,
            styles.dropdownListHeader
          )}
        >
          {title}
          <i className={'fa fa-angle-down'} aria-hidden='true'></i>
        </div>
        <ul
          className={`${styles.dropdownList} ${
            active && styles.dropdownListActive
          }`}
        >
          {renderOptions()}
        </ul>
      </div>
      )
    </>
  );
}

export default Dropdown;
