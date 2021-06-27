import { Card, MainKind } from './card';
import { PlayerState } from './player_state';

interface IGameState {
  id: string;
  startedAt: Date;
  players: Record<string, PlayerState>;
  mainDeck: Card<MainKind>[];
  cardMarket: Card<MainKind>[];
  turn: number;
}

export type GameState = Readonly<IGameState>;
