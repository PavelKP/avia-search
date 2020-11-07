import React from 'react';
import BoardItem from '../board-item/board-item';
import {connect} from 'react-redux';

const Board = ({flights}) => {
  let test = [flights[141]];
  return (
    <section className="board">
      <ul className="flight list-reset">
        {test.map((flight, i)=> <BoardItem key={i} flight={flight}/>)}
      </ul>
      <button type="button">Показать ещё</button>
    </section>
  );
}


const mapStateToProps = (state) => ({
  flights: state.flights
});

export default connect(mapStateToProps)(Board);

