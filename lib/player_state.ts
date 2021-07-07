import _ from 'lodash';
import { Card, CrystalKind, MainKind, bases, cloneCard, units } from './card';
interface IPlayerState {
  name: string;
  drawableCards: Card<MainKind>[];
  discardedCards: Card<MainKind>[];
  intactCrystalCards: Card<CrystalKind>[];
  crackedCrystalCards: Card<CrystalKind>[];
  health: number;
}

export type PlayerState = Readonly<IPlayerState>;

const merchants = (n: number): Card<MainKind>[] => {
  const element = units.filter((unit) => unit.Name === 'Merchant')[0];
  return Array.from({ length: n }, (_i) => cloneCard(element));
};

const starshipTroopers = (n: number): Card<MainKind>[] => {
  const element = units.filter((unit) => unit.Name === 'Starship Trooper')[0];
  return Array.from({ length: n }, (_i) => cloneCard(element));
};

const neutralBases = (n: number): Card<MainKind>[] => {
  const element = bases.filter((base) => base.Faction === 'Neutral')[0];
  return Array.from({ length: n }, (_i) => cloneCard(element));
};

export const newPlayerState = (playerName: string): PlayerState => {
  const playerDeck = [
    neutralBases(2),
    merchants(5),
    starshipTroopers(4),
  ].flat();

  return {
    name: playerName,
    drawableCards: _.shuffle(playerDeck),
    discardedCards: [],
    intactCrystalCards: [],
    crackedCrystalCards: [],
    health: 15,
  };
};
