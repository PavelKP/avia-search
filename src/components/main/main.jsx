import React from 'react';

const Main = () => {
  return (
    <main className="main">
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
              <input className="visually-hidden form__input-hidden" type="checkbox" name="transfer-filter" value="transfer-1"/>
              <span className="form__input form__input--box"></span>
              <span className="form__description">- 1 пересадка</span>
            </label>
            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="checkbox" name="transfer-filter" value="transfer-1"/>
              <span className="form__input form__input--box"></span>
              <span className="form__description">- без пересадок</span>
            </label>
          </fieldset>
          <fieldset className="form__set form__set--input fieldset-reset">
            <legend className="form__heading">Цена</legend>
            <div className="form__description-input-wrapper">
              <span className="form__description form__description--price">От</span>
              <input className="form__input form__input--text" type="number" placeholder="0" inputMode="numeric"/>
            </div>
            <div className="form__description-input-wrapper">
              <span className="form__description form__description--price">До</span>
              <input className="form__input form__input--text" type="number" placeholder="10000" inputMode="numeric"/>
            </div>
          </fieldset>
          <fieldset className="form__set fieldset-reset">
            <legend className="form__heading">Авиакомпания</legend>

            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="checkbox" name="company-filter" value="company-name"/>
              <span className="form__input form__input--box"></span>
              <span className="form__description form__description--company">
              -&nbsp;<span className="form__company">LOT Polish Airlines</span> от 
                <span className="form__price">21049</span>&nbsp;р.
              </span>
            </label>
            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="checkbox" name="company-filter" value="company-name"/>
              <span className="form__input form__input--box"></span>
              <span className="form__description form__description--company">
              -&nbsp;<span className="form__company">Аэрофлот - рос...</span> от 
                <span className="form__price">31733</span>&nbsp;р.
              </span>
            </label>
          </fieldset>
        </form>
      </nav>
      <section className="board">
        <ul className="flight list-reset">
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
            <button type="button">Выбрать</button>
          </li>
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
                ЛОНДОН, Лондон, Хитроу
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
            <button type="button">Выбрать</button>
          </li>
        </ul>
        <button type="button">Показать ещё</button>
      </section>
    </main>
  );
};

export default Main;
