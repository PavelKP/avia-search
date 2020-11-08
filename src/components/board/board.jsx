import React from 'react';
import BoardItem from '../board-item/board-item';
import {connect} from 'react-redux';
import {SortingType} from '../../const';


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

const transferToFilter = {
  [false]: (offers) => offers,
  [true]: (offers, transfers) => offers.filter((offer) => countTransfers(offer.flight.legs) === transfers),
}

const selectData = (offers, selection) => {
  let filtered = offers.slice();
  filtered = sortingToFilter[selection.sorting](offers);
  filtered = transferToFilter[selection.transferOne](offers, 1);
  filtered = transferToFilter[selection.transferZero](offers, 0);

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
    return (
      <section className="board">
        <ul className="flight list-reset">
          {selectData(
            this.props.flights.slice(0, this.state.cards),
            this.props.selection
            )
            .map((flight, i) => <BoardItem key={i} flight={flight} />)}
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

export default connect(mapStateToProps)(Board);

