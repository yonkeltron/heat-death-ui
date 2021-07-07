import * as _ from 'lodash';
import { Card, MainKind, units, bases } from './card';
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

  const mainDeck = assembleMainDeck();

  const cardMarket = [
    mainDeck.pop(),
    mainDeck.shift(),
    mainDeck.pop(),
    mainDeck.shift(),
    mainDeck.pop(),
  ].filter((card) => card) as Card<MainKind>[];

  return {
    id,
    startedAt: new Date().toUTCString(),
    players,
    mainDeck,
    cardMarket,
    turn: 0,
  };
};

const assembleMainDeck = (): Card<MainKind>[] => {
  const unshuffled: Card<MainKind>[] = _.uniqBy(
    [bases, units].flat(),
    (card) => card.Icon
  )
    .filter((card) => card.Faction !== 'Neutral')
    .map((card) => {
      const newCard = Object.create(card);

      return newCard;
    });

  return _.shuffle(unshuffled);
};
