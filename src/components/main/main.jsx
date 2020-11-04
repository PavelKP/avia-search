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
              <span className="form__text">- по возрастанию цены</span>
            </label>
            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="radio" name="sorting" value="priceToLow" defaultChecked />
              <span className="form__input form__input--radio"></span>
              <span className="form__text">- по убыванию цены</span>
            </label>
            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="radio" name="sorting" value="time" defaultChecked />
              <span className="form__input form__input--radio"></span>
              <span className="form__text">- по времени в пути</span>
            </label>
          </fieldset>
          <fieldset className="form__set fieldset-reset">
            <legend className="form__heading">Фильтровать</legend>
            <label>
              <input className="" type="checkbox" name="transfer-filter" value="ransfer-1" />
            - 1 пересадка
              <input className="" type="checkbox" name="transfer-filter" value="ransfer-0" />
            - без пересадок
            </label>
          </fieldset>
          <fieldset className="form__set fieldset-reset">
            <legend className="form__heading">Цена</legend>
            От <input type="number" placeholder="0"/>
            До <input type="number" placeholder="10000" />
          </fieldset>
          <fieldset className="form__set fieldset-reset">
            <legend className="form__heading">Авиакомпания</legend>
              <input className="" type="checkbox" name="company-filter" value="company-name" />
            - <span>LOT Polish Airlines</span> от <span>21049</span> р.
            <input className="" type="checkbox" name="company-filter" value="company-name" />
            - <span>Аэрофлот - рос...</span> от <span>31733</span> р.
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
