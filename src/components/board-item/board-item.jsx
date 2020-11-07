import React from 'react';
import Leg from '../leg/leg';

const BoardItem = ({flight}) => {
  const price = flight.flight.price.total.amount;
  const carrier = flight.flight.carrier.caption;
  const legs = flight.flight.legs;


  return (
    <li className="flight__item">
      <div className="flight__header">
        <img src="" alt={carrier} height="20"/>
        <div className="flight__price-wrapper">
          <p className="flight__price-value">
          {price} <span>&#8381;</span>
          </p>
          <span className="flight__price-text">Стоимость для одного взрослого пассажира</span>
        </div>
      </div>
      {legs.map((leg, i)=> <Leg key={i} leg={leg}/>)}
      <button type="button" className="button button--choose">Выбрать</button>
    </li>
  );
}

export default BoardItem;

