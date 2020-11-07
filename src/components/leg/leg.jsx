
import React from 'react';

const Leg = ({leg}) => {
  const from = leg.segments[0];
  const to = leg.segments[leg.segments.length-1];

  return (
    <article>
      <div className="flight__direction">
        <p className="flight__airport">
          <span>{from.departureCity.caption}, </span>
          <span>{from.departureAirport.caption} </span>
          <span className="flight__short-name">({from.departureAirport.uid})</span>
        </p>
        <p className="flight__arrow">
          &#10230;
          </p>
        <p className="flight__airport">
          <span>{to.arrivalCity.caption}, </span>
          <span>{to.arrivalAirport.caption} </span>
          <span className="flight__short-name">({to.arrivalAirport.uid})</span>
        </p>
      </div>
      <div className="flight__time">
        <p className="flight__departure">
          <span>{from.departureDate}</span>
          <span>{from.departureDate}</span>
        </p>
        <p className="flight__duration">
          <img />
          <span>{leg.duration}</span>
        </p>
        <p className="flight__arrival">
          <span>{to.arrivalDate}</span>
          <span>{to.arrivalDate}</span>
        </p>
      </div>
      <p>
        Рейс выполняет <span>Lot Polish Airlines</span>
      </p>
    </article>
  );
}

export default Leg;
