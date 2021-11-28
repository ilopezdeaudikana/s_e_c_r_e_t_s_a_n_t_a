import { initialState } from '../initialState';
import { SantaActions } from '../actions/actions';
import { playersReducer } from './root.reducer';
import { mockPlayer as player } from '../mock-player';
import * as utils from '../../utils/utils';

describe('playersReducer', () => {
  it('should set players', () => {
    const state = playersReducer(initialState.players, {
      type: SantaActions.SET_PLAYERS,
      payload: [player],
    });
    expect(state.list).toEqual([player]);
  });

  it('should update players list', () => {
    const mockShufflle = jest.spyOn(utils,'shuffleArray');
    playersReducer(initialState.players, {
      type: SantaActions.UPDATE_LIST,
      payload: null,
    });
    expect(mockShufflle).toHaveBeenCalled();
  });

  it('should do nothing', () => {
    const state = playersReducer(initialState.players, {
      type: 'DUMMY_ACTION',
      payload: {},
    });
    expect(state).toEqual(initialState.players);
  });
});
