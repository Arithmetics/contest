import { ChoiceCreateInput } from '.keystone/types';

export const defaultOverUnderSelections: ChoiceCreateInput[] = [
  {
    selection: 'OVER',
    isWin: false,
  },
  {
    selection: 'UNDER',
    isWin: false,
  },
];

export const overWinningOverUnderSelections: ChoiceCreateInput[] = [
  {
    selection: 'OVER',
    isWin: true,
  },
  {
    selection: 'UNDER',
    isWin: false,
  },
];
