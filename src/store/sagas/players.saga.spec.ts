import { runSaga } from 'redux-saga';
import { fetchPlayers } from './players.saga';
import { SantaActions } from '../actions/actions';
import * as api from '../../api/api';
import { mockPlayer as player } from '../mock-player';

describe('fetchPlayers', () => {
  it('should call players api and dispatch success action', async () => {
    const requestPlayers = jest
      .spyOn(api, 'getPlayers')
      .mockImplementation(() => Promise.resolve([player]));
    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchPlayers as any
    );

    expect(requestPlayers).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: SantaActions.SET_PLAYERS, payload: [player] },
    ]);
    requestPlayers.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const error = { message: 'ERROR' };
    const requestPlayers = jest
      .spyOn(api, 'getPlayers')
      .mockImplementation(() => Promise.reject(error));
    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchPlayers as any
    );

    expect(requestPlayers).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: SantaActions.SET_PLAYERS, payload: [] },
    ]);
    requestPlayers.mockClear();
  });
});

