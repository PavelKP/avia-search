import React from 'react';
import BoardItem from '../board-item/board-item';

const Board = () => {
  return (
    <section className="board">
      <ul className="flight list-reset">
        <BoardItem />
      </ul>
      <button type="button">Показать ещё</button>
    </section>
  );
}

export default Board;

