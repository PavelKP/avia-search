import React from 'react';
import {formatDuration, formatDate} from '../../utils';

const Leg = ({leg, i: key}) => {
  const from = leg.segments[0];
  const to = leg.segments[leg.segments.length-1];
  const transferCount = leg.segments.length -1;

  const arrivalAirline = to.operatingAirline ? to.operatingAirline.caption : to.airline.caption;

  return (
    <article className="leg">
      <div className="leg__line leg__line--direction">
        <p className="leg__main-text">
          <span>{from.departureCity ? `${from.departureCity.caption}, ` : ``}</span>
          <span>{from.departureAirport.caption} </span>
          <span className="leg__sub-text">({from.departureAirport.uid})</span>
        </p>
        <p className="leg__arrow">
          &#10230;
        </p>
        <p className="leg__main-text">
          <span>{to.arrivalCity ? `${to.arrivalCity.caption}, ` : ``}</span>
          <span>{to.arrivalAirport.caption} </span>
          <span className="leg__sub-text">({to.arrivalAirport.uid})</span>
        </p>
      </div>
      <div className="leg__line leg__line--time">
        <p className="leg__main-text leg__main-text--time">
          <span>{formatDate(new Date(from.departureDate), `HH:mm`)} </span>
          <span className="leg__sub-text leg__sub-text--low">
            {formatDate(new Date(from.departureDate), ` DD MMM dd`)}
          </span>
        </p >
        <div className="leg__main-text leg__main-text--clock">
          <div className="leg__clock"></div>
          <span className="leg__duration">{formatDuration(leg.duration)}</span>
        </div>
        <p className="leg__main-text leg__main-text--time">
          <span className="leg__sub-text leg__sub-text--low">{formatDate(new Date(to.arrivalDate), ` DD MMM dd`)} </span>
          <span>{formatDate(new Date(to.arrivalDate), `HH:mm`)} </span>
        </p>
      </div>
      <div className={`leg__line leg__line--transfer ${transferCount ? `` : `leg__line--empty`}`}>
        {transferCount ? <p className="leg__counter">{transferCount} пересадка</p> : ''}
      </div>
      <p className="leg__line leg__line--airline">
        Рейс выполняет:&nbsp;<span>{(key === 0) ? from.airline.caption : arrivalAirline}</span>
      </p>
    </article>
  );
}

export default Leg;
