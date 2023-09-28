import React from "react";
import PropTypes from "prop-types";
import "./BoardView.css";

export const BoardView = ({ board, onCellClick, className }) => (
  <div className={`game-board ${className || ""}`}>
    {board.map((row, i) => (
      <div key={i} className="game-board__row">
        {row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            onClick={() => onCellClick(i, j)}
            className={`game-board__cell ${
              cell.isHit
                ? cell.ship
                  ? "game-board__cell--hit"
                  : "game-board__cell--miss"
                : ""
            }`}
          ></div>
        ))}
      </div>
    ))}
  </div>
);

BoardView.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())).isRequired,
  onCellClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
