import React from 'react';

const BoardItem = () => {
  return (
    <li className="flight__item">
      <div className="flight__header">
        <img src="" height="20"></img>
        <p>21049<span>&#8381;</span></p>
        <span>Стоимость для одного взрослого пассажира</span>
      </div>
      <div className="flight__direction">
        <p>
          Москва, ШЕРЕМЕТЬЕВО
            <span>(SVO)</span>
        </p>
          &#10230;
          <p>
          Москва, ШЕРЕМЕТЬЕВО
            <span>(SVO)</span>
        </p>
      </div>
      <div className="flight__time">
        <p className="flight__departure">
          <span>20:40</span>
          <span>18 авг. вт</span>
        </p>
        <p className="flight__time">
          <span>14 ч 45 мин</span>
          <span>1 пересадка</span>
        </p>
        <p className="flight__arrival">
          <span>20:40</span>
          <span>18 авг. вт</span>
        </p>
      </div>
      <p>
        Рейс выполняет <span>Lot Polish Airlines</span>
      </p>
      <button type="button" className="button button--choose">Выбрать</button>
    </li>
  );
}

export default BoardItem;
