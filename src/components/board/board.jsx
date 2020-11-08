import React from 'react';
import BoardItem from '../board-item/board-item';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';


class Board extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleLoadMoreClick = this._handleLoadMoreClick.bind(this);
  }

  _handleLoadMoreClick() {
    //this.setState((state) => ({cards: state.cards + 100}));
    this.props.setCards(50);
  }

  render() {
    return (
      <section className="board">
        <ul className="flight list-reset">
          {this.props.filteredFlights.slice(0, this.props.cards).map((flight, i) => <BoardItem key={i} flight={flight} />)}
        </ul>
        <button className="button button--more" type="button" onClick={this._handleLoadMoreClick}>Показать еще</button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredFlights: state.filtered,
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => ({
  setCards(amount) {
    dispatch(ActionCreator.setCards(amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);

