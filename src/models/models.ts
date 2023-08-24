export interface Player {
  name: string;
  email: string;
  phone: string;
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
