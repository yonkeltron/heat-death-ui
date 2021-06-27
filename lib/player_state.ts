import { Card, CrystalKind, MainKind } from './card';

interface IPlayerState {
  name: string;
  drawableCards: Card<MainKind>[];
  discardedCards: Card<MainKind>[];
  intactCrystalCards: Card<CrystalKind>[];
  crackedCrystalCards: Card<CrystalKind>[];
  health: number;
}

export type PlayerState = Readonly<IPlayerState>;
