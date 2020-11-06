import React from 'react';

const Menu = () => {
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

export default Menu;
