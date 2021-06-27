export type CardKind = 'Base' | 'Crystal' | 'Unit';

export interface Card {
  image: string;
  kind: CardKind;
  name: string;
}

export const imagePathFor = (card: Card): string => {
  return `/cards/${card.image}`;
};
