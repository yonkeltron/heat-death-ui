import { Card, MainKind } from './card';
import { PlayerState, newPlayerState } from './player_state';

interface IGameState {
  id: string;
  startedAt: string;
  players: Record<string, PlayerState>;
  mainDeck: Card<MainKind>[];
  cardMarket: Card<MainKind>[];
  turn: number;
}

export type GameState = Readonly<IGameState>;

export const newGameState = (id: string, playerNames: string[]): GameState => {
  const players = Object.fromEntries(
    playerNames.map((playerName) => [playerName, newPlayerState(playerName)])
  );
  return {
    id,
    startedAt: new Date().toUTCString(),
    players,
    mainDeck: [],
    cardMarket: [],
    turn: 0,
  };
};
