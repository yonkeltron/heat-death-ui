import { v4 as uuidv4 } from 'uuid';

import rawBases from '~/content/bases.json';
import rawUnits from '~/content/units.json';

export type MainKind = 'Base' | 'Unit';

export type CrystalKind = 'Crystal';

export type CardKind = MainKind | CrystalKind;

export interface Card<K extends CardKind> {
  Combat: number;
  Cost: number;
  Faction: string;
  Icon: string;
  Id: string;
  Kind: K;
  Name: string;
  Quantity: number;
  Trade: number;
  Image: string;
}

export const imagePathFor = (card: Card<CardKind>): string => {
  return `/cards/${card.Image}`;
};

export const imageFor = (card: Card<CardKind>, index: number): string => {
  const displayIndex = `${index}`.padStart(2, '0');
  let output: string;

  if (card.Kind === 'Base') {
    output = `bases_${displayIndex}.png`;
  } else if (card.Kind === 'Unit') {
    output = `units_${displayIndex}.png`;
  } else {
    output = `crystals_${displayIndex}.png`;
  }

  return output;
};

export const bases: Readonly<Card<MainKind>[]> = rawBases.map(
  (rawBase: any, index: number) => {
    rawBase.Image = imagePathFor(rawBase, index);
    rawBase.Id = uuidv4();

    return rawBase;
  }
);

export const units: Readonly<Card<MainKind>[]> = rawUnits.map(
  (rawUnit: any, index: number) => {
    rawUnit.Image = imagePathFor(rawUnit, index);
    rawUnit.Id = uuidv4();

    return rawUnit;
  }
);

export const cloneCard = <T extends MainKind>(card: Card<T>): Card<T> => {
  const newCard = Object.create(card);
  newCard.Id = uuidv4();

  return newCard;
};
