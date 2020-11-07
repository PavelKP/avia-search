import React from 'react';
import BoardItem from '../board-item/board-item';
import {connect} from 'react-redux';

class Board extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cards: 2,
    }

    this._handleLoadMoreClick = this._handleLoadMoreClick.bind(this);
  }

  _handleLoadMoreClick() {
    this.setState((state) => ({cards: state.cards + 2}));
  }

  render() {
    return (
      <section className="board">
        <ul className="flight list-reset">
          {this.props.flights.slice(0, this.state.cards).map((flight, i) => <BoardItem key={i} flight={flight} />)}
        </ul>
        <button className="button button--more" type="button" onClick={this._handleLoadMoreClick}>Показать еще</button>
      </section>
    );
  }
}


const mapStateToProps = (state) => ({
  flights: state.flights
});

export default connect(mapStateToProps)(Board);

