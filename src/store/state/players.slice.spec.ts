import { initialState } from '../initialState';
import playersReducer from './players.slice';
import { mockPlayer as player } from '../mock-player';

describe('playersReducer', () => {
  it('should set players', () => {
    const state = playersReducer(initialState.players, {
      type: 'players/setPlayers',
      payload: [player],
    });
    expect(state.list).toEqual([player]);
  });

  it('should do nothing', () => {
    const state = playersReducer(initialState.players, {
      type: 'DUMMY_ACTION',
      payload: {},
    });
    expect(state).toEqual(initialState.players);
  });
});
