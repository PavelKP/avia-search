import React from 'react';
import {formatDuration, formatDate} from '../../utils';

const Leg = ({leg}) => {
  const from = leg.segments[0];
  const to = leg.segments[leg.segments.length-1];
  const transferCount = leg.segments.length -1;

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
          <span>{formatDate(new Date(from.departureDate), `HH:mm`)} </span>
          <span>{formatDate(new Date(from.departureDate), `	MMM dd`)}</span>
        </p>
        <p className="flight__duration">
          <img />
          <span>{formatDuration(leg.duration)}</span>
        </p>
        <p className="flight__arrival">
          <span>{formatDate(new Date(to.arrivalDate), `	MMM dd`)} </span>
          <span>{formatDate(new Date(to.arrivalDate), `HH:mm`)} </span>
        </p>
      </div>
        {transferCount ? <p>{transferCount} пересадка</p> : ''}
      <p>
        Рейс выполняет: <span>{from.airline.caption}</span>
      </p>
    </article>
  );
}

export default Leg;
