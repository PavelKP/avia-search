import React from 'react';
import {connect} from 'react-redux';
import CompanyItem from '../compnay-item/company-item';

const getCompaniesMap = (flights) => {
  const sortedFlights = flights.sort((a, b) => {
    return a.flight.price.total.amount - b.flight.price.total.amount;
  });

  const companiesToPrice = new Map();

  sortedFlights.forEach((flight)=> {
    if (!companiesToPrice.has(flight.flight.carrier.caption)) {

      const key = flight.flight.carrier.caption;
      const value = flight.flight.price.total.amount;
      companiesToPrice.set(key, value);
    }
  });

  return [...companiesToPrice];
}

const Menu = ({flights}) => {

  const companiesCheckboxes = getCompaniesMap(flights);

  return (
    <nav className="navigation">
      <form className="form">
        <fieldset className="form__set fieldset-reset">
          <legend className="form__heading">Сортировать</legend>
          <label className="form__label">
            <input className="visually-hidden form__input-hidden" type="radio" name="sorting" value="priceToHigh" defaultChecked />
            <span className="form__input form__input--radio"></span>
            <span className="form__description">- по возрастанию цены</span>
          </label>
          <label className="form__label">
            <input className="visually-hidden form__input-hidden" type="radio" name="sorting" value="priceToLow" />
            <span className="form__input form__input--radio"></span>
            <span className="form__description">- по убыванию цены</span>
          </label>
          <label className="form__label">
            <input className="visually-hidden form__input-hidden" type="radio" name="sorting" value="time" />
            <span className="form__input form__input--radio"></span>
            <span className="form__description">- по времени в пути</span>
          </label>
        </fieldset>
        <fieldset className="form__set form__set--filter fieldset-reset">
          <legend className="form__heading">Фильтровать</legend>
          <label className="form__label">
            <input className="visually-hidden form__input-hidden" type="checkbox" name="transfer-filter" value="transfer-1" />
            <span className="form__input form__input--box"></span>
            <span className="form__description">- 1 пересадка</span>
          </label>
          <label className="form__label">
            <input className="visually-hidden form__input-hidden" type="checkbox" name="transfer-filter" value="transfer-1" />
            <span className="form__input form__input--box"></span>
            <span className="form__description">- без пересадок</span>
          </label>
        </fieldset>
        <fieldset className="form__set form__set--input fieldset-reset">
          <legend className="form__heading">Цена</legend>
          <div className="form__description-input-wrapper">
            <span className="form__description form__description--price">От</span>
            <input className="form__input form__input--text" type="number" placeholder="0" inputMode="numeric" />
          </div>
          <div className="form__description-input-wrapper">
            <span className="form__description form__description--price">До</span>
            <input className="form__input form__input--text" type="number" placeholder="10000" inputMode="numeric" />
          </div>
        </fieldset>
        <fieldset className="form__set fieldset-reset">
          <legend className="form__heading">Авиакомпания</legend>
          {companiesCheckboxes.map(([company, lowestPrice], i) => {
              return <CompanyItem company={company} price={lowestPrice} key={i} />
            })}

          <label className="form__label">
            <input className="visually-hidden form__input-hidden" type="checkbox" name="company-filter" value="company-name" />
            <span className="form__input form__input--box"></span>
            <span className="form__description form__description--company">
              -&nbsp;<span className="form__company">LOT Polish Airlines</span> от
                <span className="form__price">21049</span>&nbsp;р.
              </span>
          </label>
          <label className="form__label">
            <input className="visually-hidden form__input-hidden" type="checkbox" name="company-filter" value="company-name" />
            <span className="form__input form__input--box"></span>
            <span className="form__description form__description--company">
              -&nbsp;<span className="form__company">Аэрофлот - рос...</span> от
                <span className="form__price">31733</span>&nbsp;р.
              </span>
          </label>
        </fieldset>
      </form>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  flights: state.flights
});

export default connect(mapStateToProps)(Menu);
