import { combineReducers } from 'redux';
import { initialState } from '../initialState';
import { Action, PlayersState } from './../../models/models';
import { SantaActions } from '../actions/actions';
import { shuffleArray } from '../../utils/utils';

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
      return { ...state, list: shuffleArray(state.list)}
    default:
      return state;
  }
};

export default combineReducers({
  players: playersReducer,
});
