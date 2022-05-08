import React from 'react';
import GeneralAboutPage from '../../../src/components/GeneralAboutPage/GeneralAboutPage';
import img from '../../../src/assets/groups/fitness_group_image.webp';

const text = (
  <>
    <p>
      Na zajęcia w tej grupie licznie pojawiają się zarówno kobiety jak i
      mężczyźni powyżej 16 roku życia. Ze względu na charakterystykę treningu
      (wysoka intensywność) zajęcia nie przekraczają czasu 60 minut. Treningi
      prowadzę na podstawie doświadczeń z dotychczasowej pracy szkoleniowej, a
      także doświadczeń wyniesionych z udziału w różnego rodzaju zajęciach
      fitness. Zajęcia przeznaczone są niemal dla każdego ponieważ w zależności
      od poziomu wytrenowania, każdy z uczestników wykonuje ćwiczenia na miarę
      swoich możliwości motorycznych. Warunkiem dopuszczającym do wzięcia
      udziału w treningu jest dobry stan zdrowia i brak przeciwskazań do udziału
      w takiej formie treningowej.
    </p>

    <p>Przebieg treningu:</p>
    <ul>
      <li>wprowadzenie - omówienie i prezentacja wybranych ćwiczeń,</li>
      <li>
        rozgrzewka, która jest bardzo ważną oraz integralną częścią treningu,{' '}
      </li>
      <li>
        część zasadnicza, którą stanowią zestawy odpowiednio dobranych ćwiczeń,
      </li>
      <li>rozciąganie i rozluźnienie.</li>
    </ul>

    <p>Korzyści płynące z udziału w treningu:</p>
    <ul>
      <li>odstresowanie się i lepsze samopoczucie, </li>
      <li>
        wysoka skuteczność eliminacji nadmiaru tkanki tłuszczowej bez
        jednoczesnej redukcji tkanki mięśniowej,
      </li>
      <li>wzmocnienie rożnych grup mięśni,</li>
      <li>budowanie i rozwijanie wytrzymałości, szybkości i siły, </li>
      <li>
        poprawa ogólnej kondycji, koordynacji ruchowej, skoczności, a także
        gibkości.
      </li>
    </ul>

    <p>Sala wyposażona jest w maty fitness.</p>
  </>
);

function index() {
  return (
    <GeneralAboutPage
      name={'GRUPA FITNESS'}
      imgSrc={img}
      imgAlt={''}
      text={text}
    />
  );
}

export default index;
