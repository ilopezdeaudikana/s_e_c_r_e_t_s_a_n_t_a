import { Player } from '../../models/models';

export enum SantaActions {
  SET_PLAYERS = '[SantaActions] Set players from API',
  UPDATE_LIST = '[SantaActions] Update list',
  FETCH_PLAYERS = '[SantaActions] Fetch players from API',
}

/** @namespace Actions */
/**
 * @method UpdateList
 * @returns {Action} SantaActions.UPDATE_LIST
 * @memberof Actions
 */
export const UpdateList = () => ({
  type: SantaActions.UPDATE_LIST,
  payload: null,
});

/**
 * @method SetPlayers
 * @params {Player[]}
 * @returns {Action} SantaActions.SET_PLAYERS
 * @memberof Actions
 */
export const SetPlayers = (players: Player[]) => ({
  type: SantaActions.SET_PLAYERS,
  payload: players,
});

/**
 * @method FetchPlayers
 * @returns {Action} SantaActions.FETCH_PLAYERS
 * @memberof Actions
 */
export const FetchPlayers = () => ({
  type: SantaActions.FETCH_PLAYERS,
  payload: null,
});
