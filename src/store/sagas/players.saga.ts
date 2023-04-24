/** @namespace Sagas */

import { call, put, takeEvery } from 'redux-saga/effects';
import { Player } from '../../models/models';
import { SantaActions } from '../actions/actions';
import { setPlayers } from '../state/players.slice';
import { getPlayers } from '../../api/api';

/**
 * Requests players from the API and sets the response in the store.
 *
 * @function fetchPlayers
 * @memberof Sagas
 */
export function* fetchPlayers() {
  try {
    const players: Player[] = yield call(getPlayers);
    yield put(setPlayers(players));
  } catch (e) {
    // console.log(e);
    yield put(setPlayers([]));
  }
}

/**
 * Calls fetchPlayers on each dispatched `FETCH_PLAYERS` action.
 * 
 * @function playersSaga
 * @memberof Sagas
 */
 
function* playersSaga() {
  yield takeEvery(SantaActions.FETCH_PLAYERS, fetchPlayers);
}

export default playersSaga;
