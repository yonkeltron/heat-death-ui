import { Card, CrystalKind, MainKind, bases, units } from './card';
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
  return units.filter((unit) => unit.Name === 'Merchant').slice(0, n);
};

const starshipTroopers = (n: number): Card<MainKind>[] => {
  return units.filter((unit) => unit.Name === 'Starship Trooper').slice(0, n);
};

const neutralBases = (n: number): Card<MainKind>[] => {
  return bases.filter((base) => base.Faction === 'Neutral').slice(0, n);
};

export const newPlayerState = (playerName: string): PlayerState => {
  const playerDeck = [
    neutralBases(2),
    merchants(5),
    starshipTroopers(4),
  ].flat();

  return {
    name: playerName,
    drawableCards: playerDeck,
    discardedCards: [],
    intactCrystalCards: [],
    crackedCrystalCards: [],
    health: 15,
  };
};
