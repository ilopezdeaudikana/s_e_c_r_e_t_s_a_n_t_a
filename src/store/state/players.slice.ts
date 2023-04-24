import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { Player, PlayersState } from '../../models/models';

/**
 *
 * @function playersReducer
 * @returns { State }
 * @memberof Store
 */

const playersSlice = createSlice({
  name: 'players',
  initialState: initialState.players,
  reducers: {
    setPlayers(state: PlayersState, action: PayloadAction<Player[]>) {
      state.list = action.payload
    },
    updateList(state: PlayersState) {
      state.list = [...state.list]
    }
  }
})

export const { setPlayers, updateList} = playersSlice.actions;
export default playersSlice.reducer;