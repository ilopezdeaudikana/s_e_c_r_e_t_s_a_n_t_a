export interface Player {
  name: { first: string; last: string };
  age: number;
  email: string;
  phone: string;
  wishlist: string[];
}

export interface PlayersState {
  list: Player[];
}

export interface PairedPlayers {
  from: Player;
  to: Player;
}

export interface State {
  players: PlayersState;
}

export interface Action {
  type: string;
  payload: any;
}
