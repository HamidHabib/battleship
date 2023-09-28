import { connect } from "react-redux";
import { BoardView } from "./BoardView";
import { getBattleshipBoard } from "../../state/selectors/battleship.selectors";
import { shoot } from "../../state/actions/battleship.actions";

const mapStateToProps = (state) => ({
  board: getBattleshipBoard(state),
});

export const BoardContainer = connect(mapStateToProps, { onCellClick: shoot })(
  BoardView
);
