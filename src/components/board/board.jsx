import React from 'react';
import BoardItem from '../board-item/board-item';
import {connect} from 'react-redux';

const Board = ({flights}) => {
  return (
    <section className="board">
      <ul className="flight list-reset">
        {flights.slice(0, 2).map((flight, i)=> <BoardItem key={i} flight={flight}/>)}
      </ul>
      <button className="button button--more" type="button">Показать еще</button>
    </section>
  );
}


const mapStateToProps = (state) => ({
  flights: state.flights
});

export default connect(mapStateToProps)(Board);

