import { SHOOT_ACTION, RESTART_ACTION } from "../actions/battleship.actions";
import {
  getGameState,
  GAME_STATE_FINISHED,
} from "../selectors/battleship.selectors";

const data = {
  shipTypes: {
    carrier: { size: 5, count: 1 },
    battleship: { size: 4, count: 1 },
    cruiser: { size: 3, count: 1 },
    submarine: { size: 3, count: 1 },
    destroyer: { size: 2, count: 1 },
  },
  layout: [
    {
      ship: "carrier",
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9],
      ],
    },
    {
      ship: "battleship",
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
    },
    {
      ship: "cruiser",
      positions: [
        [8, 1],
        [8, 2],
        [8, 3],
      ],
    },
    {
      ship: "submarine",
      positions: [
        [3, 0],
        [3, 1],
        [3, 2],
      ],
    },
    {
      ship: "destroyer",
      positions: [
        [0, 0],
        [1, 0],
      ],
    },
  ],
};

function initialBoard(shipData, playerScore) {
  const board = new Array(10).fill(null).map((_, i) =>
    new Array(10).fill(null).map((_, j) => {
      const ship = shipData.layout.find((s) =>
        s.positions.some((pos) => pos[0] === j && pos[1] === i)
      );

      return { ship, isHit: false };
    })
  );

  return {
    board,
    layout: shipData.layout,
    shipTypes: shipData.shipTypes,
    playerScore,
  };
}

export default function battleshipBoard(state = initialBoard(data, 0), action) {
  switch (action.type) {
    case SHOOT_ACTION:
      if (getGameState({ battleship: state }) === GAME_STATE_FINISHED) {
        return state;
      }
      const newBoard = state.board.map((row) => row.slice());
      newBoard[action.payload.i][action.payload.j].isHit = true;
      const newState = {
        ...state,
        board: newBoard,
      };

      if (getGameState({ battleship: newState }) === GAME_STATE_FINISHED) {
        newState.playerScore = (newState.playerScore + 1) % 100;
      }

      return newState;
    case RESTART_ACTION:
      return initialBoard(data, state.playerScore);
    default:
      return state;
  }
}
