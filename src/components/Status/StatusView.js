import React from "react";
import "./StatusView.css";

const formatScore = (score) => "0" + score.toString().slice(-2);

const PlayerScore = ({ score, name, first }) => (
  <div
    className={`player-score ${
      first ? "player-score--team-orange" : "player-score--team-green"
    }`}
  >
    <p className="player-score__text">{formatScore(score)}</p>
    <hr className="player-score__divider" />
    <p className="player-score__name">{name}</p>
  </div>
);

const ShipStatus = ({ ship, totalHealth, numberOfHits }) => (
  <div className="ship-status">
    <div
      className={`ship-status__element ship-status__ship-body ship-status__ship-body--${ship}`}
    />
    <div className="ship-status__element ship-body">
      {Array.from({ length: totalHealth }).map((_, i) => (
        <div
          key={i}
          className={`ship-body__health ${
            i < numberOfHits && "ship-body__health--hit"
          }`}
        />
      ))}
    </div>
  </div>
);

export const StatusView = ({ status, types, score }) => {
  const typeNames = Object.keys(types);

  return (
    <div className="status-container">
      <div className="status-container__team-scores">
        <PlayerScore first name="Team Orange" score={score} />
        <PlayerScore name="Team Green" score={0} />
      </div>
      <div className="ship-status-list">
        {typeNames.map((type) => (
          <ShipStatus
            key={type}
            ship={type}
            totalHealth={types[type].size}
            numberOfHits={status[type].hits}
          />
        ))}
      </div>
    </div>
  );
};
