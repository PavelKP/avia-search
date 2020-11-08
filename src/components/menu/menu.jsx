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

    this._companiesCheckboxes = getCompaniesMap(this.props.flights);
    //this._formCompanyRef = React.createRef();

    this._handleFromChange = this._handleFromChange.bind(this);
    this._handleSortingChange = this._handleSortingChange.bind(this);
    this._handleTransferChange = this._handleTransferChange.bind(this);
    this._handleCompanyChange = this._handleCompanyChange.bind(this);
  }

  _handleFromChange(evt) {
    evt.preventDefault();
    console.log(evt);
    //const formData = new FormData(this._formRef.current)
    //console.log(...formData);
    //console.log(formData.get(`transferOne`), formData.get(`transferZero`))
    console.log(evt.target.value);
  }

  _handleSortingChange(evt) {
    //console.log(evt.target.value)
    this.props.setSorting(evt.target.value);
  }

  _handleTransferChange(evt) {
    console.log(evt.target.checked)
  }

  _handleCompanyChange(evt) {
    evt.preventDefault();
    this.props.setCompany(evt.target.name);
    //console.log(evt.target.name);
    //console.log(this.props.activeCompanies);
  }

  render() {
    return (
      <nav className="navigation">
        <form className="form" action="">
          <fieldset className="form__set fieldset-reset" onChange={this._handleSortingChange}>
            <legend className="form__heading">Сортировать</legend>
            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="radio" name="sorting" value="TO_HIGHT" defaultChecked/>
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
          <fieldset className="form__set form__set--filter fieldset-reset" onChange={this._handleTransferChange}>
            <legend className="form__heading">Фильтровать</legend>
            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="checkbox" name="transferOne" value={true}/>
              <span className="form__input form__input--box"></span>
              <span className="form__description">- 1 пересадка</span>
            </label>
            <label className="form__label">
              <input className="visually-hidden form__input-hidden" type="checkbox" name="transferZero" value={true}/>
              <span className="form__input form__input--box"></span>
              <span className="form__description">- без пересадок</span>
            </label>
          </fieldset>
          <fieldset className="form__set form__set--input fieldset-reset">
            <legend className="form__heading">Цена</legend>
            <div className="form__description-input-wrapper">
              <span className="form__description form__description--price">От</span>
              <input className="form__input form__input--text" name="from" type="number" placeholder="0" inputMode="numeric" defaultValue={this.props.priceFrom || ``} />
            </div>
            <div className="form__description-input-wrapper">
              <span className="form__description form__description--price">До</span>
              <input className="form__input form__input--text" name="to" type="number" placeholder="10000" inputMode="numeric" defaultValue={this.props.priceTo || ``} />
            </div>
          </fieldset>
          <fieldset className="form__set fieldset-reset">
            <legend className="form__heading">Авиакомпания</legend>
            {this._companiesCheckboxes.map(([company, lowestPrice], i) => {
              return <CompanyItem company={company} price={lowestPrice} key={i}/>
            })}
          </fieldset>
        </form>
      </nav>
    );
  }
}


const mapStateToProps = (state) => ({
  flights: state.flights,
  sorting: state.sorting,
  transferOne: state.transferOne,
  transferZero: state.transferZero,
  priceFrom: state.priceFrom,
  priceTo: state.priceTo,
  //activeCompanies: state.activeCompanies,
});

const mapDispatchToProps = (dispatch) => ({
  setSorting(sortingType) {
    dispatch(ActionCreator.setSorting(sortingType));
  },
  setCompany(company) {
    dispatch(ActionCreator.setCompany(company));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
