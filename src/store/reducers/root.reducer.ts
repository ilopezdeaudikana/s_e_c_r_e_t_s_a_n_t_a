import { combineReducers } from 'redux';
import { initialState } from '../initialState';
import { Action, PlayersState } from './../../models/models';
import { SantaActions } from '../actions/actions';

/**
 *
 * @function playersReducer
 * @returns { State }
 * @memberof Store
 */
export const playersReducer = (
  state: PlayersState = initialState.players,
  action: Action
): PlayersState => {
  switch (action.type) {
    case SantaActions.SET_PLAYERS:
      return { ...state, list: action.payload };
    case SantaActions.UPDATE_LIST:
      return { ...state }
    default:
      return state;
  }
};

export default combineReducers({
  players: playersReducer,
});
