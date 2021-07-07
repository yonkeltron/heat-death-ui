import _ from 'lodash';
import { Card, MainKind } from './card';
import { GameState } from './game_state';
import { PlayerState } from './player_state';

export interface GameTurn {
  gameStateChanges: Record<string, Card<MainKind>[]>;
  id: string;
  playedAt: Date;
  playedByPlayer: string;
  playerStateChanges: Record<string, PlayerState>;
  turn: number;
}

export const newGameTurn = (
  previousGameState: GameState,
  playedByPlayer: string
): GameTurn => {
  return {
    gameStateChanges: {},
    id: _.uniqueId('GameTurn_'),
    playedAt: new Date(),
    playedByPlayer,
    playerStateChanges: {},
    turn: previousGameState.turn + 1,
  };
};
