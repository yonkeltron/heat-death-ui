import { Card, CrystalKind, MainKind } from './card';
import bases from '~/content/bases.json';
import units from '~/content/units.json';
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
  return units
    .filter((unit) => unit.Name === 'Merchant')
    .map((unit) => {
      const image = 'units_00.png';
      const name = unit.Name;
      const kind: MainKind = 'Unit';

      return { image, name, kind };
    })
    .slice(0, n);
};

const starshipTroopers = (n: number): Card<MainKind>[] => {
  return units
    .filter((unit) => unit.Name === 'Starship Trooper')
    .map((unit) => {
      const image = 'units_16.png';
      const name = unit.Name;
      const kind: MainKind = 'Unit';

      return { image, name, kind };
    })
    .slice(0, n);
};

const neutralBases = (n: number): Card<MainKind>[] => {
  return bases
    .filter((base) => base.Faction === 'Neutral')
    .map((base) => {
      const image = 'units_16.png';
      const name = base.Name;
      const kind: MainKind = 'Base';

      return { image, name, kind };
    })
    .slice(0, n);
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
