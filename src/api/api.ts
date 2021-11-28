import { Player } from '../models/models';

const server: string = process.env.REACT_APP_SANTA_API || '';

/**
 * Service for API request.
 *
 * @function getPlayers
 * @returns { Promise<Player[]> }
 */
export const getPlayers = async (): Promise<Player[]> => {
  const response: Response = await fetch(server);
  const posts: Player[] = await response.json();
  return posts;
};

