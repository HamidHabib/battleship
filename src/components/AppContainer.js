import { connect } from "react-redux";
import { getGameState } from "../state/selectors/battleship.selectors";
import { restart } from "../state/actions/battleship.actions";
import App from "./App";

const mapStateToProps = (state) => ({
  gameState: getGameState(state),
});

export const AppContainer = connect(mapStateToProps, { onRestart: restart })(
  App
);
