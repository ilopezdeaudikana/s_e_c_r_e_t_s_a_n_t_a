import { initialState } from '../initialState';
import { SantaActions } from '../actions/actions';
import { playersReducer } from './root.reducer';
import { mockPlayer as player } from '../mock-player';

describe('playersReducer', () => {
  it('should set players', () => {
    const state = playersReducer(initialState.players, {
      type: SantaActions.SET_PLAYERS,
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
