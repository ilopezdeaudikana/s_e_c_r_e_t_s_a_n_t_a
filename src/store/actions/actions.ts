export enum SantaActions {
  FETCH_PLAYERS = '[SantaActions] Fetch players from API',
}

/**
 * @method FetchPlayers
 * @returns {Action} SantaActions.FETCH_PLAYERS
 * @memberof Actions
 */
export const FetchPlayers = () => ({
  type: SantaActions.FETCH_PLAYERS,
  payload: null,
});
