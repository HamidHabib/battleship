import { connect } from "react-redux";
import { StatusView } from "./StatusView";
import {
  getShipState,
  getShipTypes,
  getScore,
} from "../../state/selectors/battleship.selectors";

const mapStateToProps = (state) => ({
  status: getShipState(state),
  types: getShipTypes(state),
  score: getScore(state),
});

export const StatusContainer = connect(mapStateToProps, null)(StatusView);
