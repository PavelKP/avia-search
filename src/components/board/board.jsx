import React from 'react';
import BoardItem from '../board-item/board-item';
import {connect} from 'react-redux';
import {SortingType} from '../../const';
import {ActionCreator} from '../../store/action';

const countDuration = (legs) => {
  return legs.reduce((acc, current) => acc + current.duration, 0);
}

const countTransfers = (legs) => {
  let counter = 0;
  legs.forEach((leg) => {
    if (leg.segments.length === 2) {
      counter++;
    }
  })
  return counter;
};

const sortingToFilter = {
  [SortingType.TO_HIGH]: (offers) => offers.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount),
  [SortingType.TO_LOW]: (offers) => offers.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount),
  [SortingType.TIME]: (offers) => offers.sort((a, b) => {
    return countDuration(a.flight.legs) - countDuration(b.flight.legs)
  }),
}

const selectData = (offers, selection) => {
  let filtered = offers.slice();
  filtered = sortingToFilter[selection.sorting](filtered);

  if (selection.transferOne && selection.transferZero){
    filtered = filtered.filter((offer) => countTransfers(offer.flight.legs) === 0 || countTransfers(offer.flight.legs) === 1);
  }
  else if (selection.transferOne) {
    filtered = filtered.filter((offer) => countTransfers(offer.flight.legs) === 1);
  }
  else if (selection.transferZero) {
    filtered = filtered.filter((offer) => countTransfers(offer.flight.legs) === 0);
  }

  filtered = filtered.filter((offer) => {
    return +offer.flight.price.total.amount >= +selection.priceFrom && +offer.flight.price.total.amount <= +selection.priceTo;
  })

  return filtered;
}


class Board extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cards: 2,
    }

    this._handleLoadMoreClick = this._handleLoadMoreClick.bind(this);
  }

  _handleLoadMoreClick() {
    this.setState((state) => ({cards: state.cards + 100}));
  }

  render() {
    const filteredFlights = selectData(
      this.props.flights.slice(0, this.state.cards),
      this.props.selection
      );

    //this.props.setFiltered(filteredFlights);

    return (
      <section className="board">
        <ul className="flight list-reset">
          {filteredFlights.map((flight, i) => <BoardItem key={i} flight={flight} />)}
        </ul>
        <button className="button button--more" type="button" onClick={this._handleLoadMoreClick}>Показать еще</button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  flights: state.flights,
  selection: {
    sorting: state.sorting,
    transferOne: state.transferOne,
    transferZero: state.transferZero,
    priceFrom: state.priceFrom,
    priceTo: state.priceTo,
    activeCompanies: state.activeCompanies,
  }
});

const mapDispatchToProps = (dispatch) => ({
  setFiltered(filtered) {
    dispatch(ActionCreator.setFiltered(filtered));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);

