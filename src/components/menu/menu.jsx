import React from 'react';
import {connect} from 'react-redux';
import CompanyItem from '../compnay-item/company-item';
import {ActionCreator} from '../../store/action';

const getCompaniesMap = (flights) => {
  const sortedFlights = flights.slice().sort((a, b) => {
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

class Menu extends React.Component {
  constructor(props) {
    super(props)

    this._handleSortingChange = this._handleSortingChange.bind(this);
    this._handleTransferOneChange = this._handleTransferOneChange.bind(this);
    this._handleTransferZeroChange = this._handleTransferZeroChange.bind(this);
    this._handlePriceFromChange = this._handlePriceFromChange.bind(this);
    this._handlePriceToChange = this._handlePriceToChange.bind(this);

    this.state = {
      companiesCheckboxes: [],
    }
  }

  componentDidMount() {
    this.setState({companiesCheckboxes: getCompaniesMap(
        this.props.filtered.slice(0, this.props.cards)
      )})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filtered !== this.props.filtered || prevProps.cards !== this.props.cards) {
      this.setState({companiesCheckboxes: getCompaniesMap(
        this.props.filtered.slice(0, this.props.cards)
      )})
    }
  }

  _handleFromChange(evt) {
    evt.preventDefault();
  }

  _handleSortingChange(evt) {
    this.props.setSorting(evt.target.value);
  }

  _handleTransferOneChange() {
    this.props.changeTransferOne();
  }

  _handleTransferZeroChange() {
    this.props.changeTransferZero();
  }

  _handlePriceFromChange(evt) {
    evt.preventDefault();
    this.props.setPriceFrom(evt.target.value);
  }

  _handlePriceToChange(evt) {
    evt.preventDefault();
    this.props.setPriceTo(evt.target.value);
  }

  render() {
    return (
      <nav className="navigation">
        <form className="form" action="">
          <fieldset className="form__set fieldset-reset" onChange={this._handleSortingChange}>
            <legend className="form__heading">Сортировать</legend>
            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="radio" name="sorting" value="TO_HIGH" defaultChecked/>
              <span className="form__input form__input--radio"></span>
              <span className="form__description">- по возрастанию цены</span>
            </label>
            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="radio" name="sorting" value="TO_LOW" />
              <span className="form__input form__input--radio"></span>
              <span className="form__description">- по убыванию цены</span>
            </label>
            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="radio" name="sorting" value="TIME" />
              <span className="form__input form__input--radio"></span>
              <span className="form__description">- по времени в пути</span>
            </label>
          </fieldset>
          <fieldset className="form__set form__set--filter fieldset-reset">
            <legend className="form__heading">Фильтровать</legend>
            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="checkbox" name="transferOne"
              onChange={this._handleTransferOneChange}/>
              <span className="form__input form__input--box"></span>
              <span className="form__description">- 1 пересадка</span>
            </label>
            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="checkbox" name="transferZero"
              onChange={this._handleTransferZeroChange}/>
              <span className="form__input form__input--box"></span>
              <span className="form__description">- без пересадок</span>
            </label>
          </fieldset>
          <fieldset className="form__set form__set--input fieldset-reset">
            <legend className="form__heading">Цена</legend>
            <div className="form__description-input-wrapper">
              <span className="form__description form__description--price">От</span>
              <input className="form__input form__input--text" name="from" type="number" placeholder="0" inputMode="numeric"
                onChange={this._handlePriceFromChange}
                defaultValue={''}/>
            </div>
            <div className="form__description-input-wrapper">
              <span className="form__description form__description--price">До</span>
              <input className="form__input form__input--text" name="to" type="number" placeholder="10000" inputMode="numeric"
                onChange={this._handlePriceToChange}
                defaultValue={''} />
            </div>
          </fieldset>
          <fieldset className="form__set fieldset-reset">
            <legend className="form__heading">Авиакомпания</legend>
            {this.state.companiesCheckboxes.map(([company, lowestPrice], i) => {
              return <CompanyItem company={company} price={lowestPrice} key={i}/>
            })}
          </fieldset>
        </form>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  filtered: state.filtered,
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => ({
  setSorting(sortingType) {
    dispatch(ActionCreator.setSorting(sortingType));
  },
  changeTransferOne() {
    dispatch(ActionCreator.changeTransferOne());
  },
  changeTransferZero() {
    dispatch(ActionCreator.changeTransferZero());
  },
  setPriceFrom(price) {
    dispatch(ActionCreator.setPriceFrom(price));
  },
  setPriceTo(price) {
    dispatch(ActionCreator.setPriceTo(price));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
