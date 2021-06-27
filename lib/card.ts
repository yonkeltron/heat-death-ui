export type MainKind = 'Base' | 'Unit';

export type CrystalKind = 'Crystal';

export type CardKind = MainKind | CrystalKind;

export interface Card<K extends CardKind> {
  image: string;
  kind: K;
  name: string;
}

export const imagePathFor = (card: Card<CardKind>): string => {
  return `/cards/${card.image}`;
};
