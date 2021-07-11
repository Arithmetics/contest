import { ContestCreateInput } from '.keystone/types';
import { standingsSetA, standingsSetB, standingsSetC } from './standings';
import { defaultOverUnderSelections, overWinningOverUnderSelections } from './choices';

export const contests: ContestCreateInput[] = [
  {
    name: '2021 NFL Over Under',
    description: 'Pick over under team totals',
    status: 'OPEN',
    entryFee: 25,
    lines: {
      create: [
        // open
        {
          title: 'Pittsburgh Steelers',
          closingTime: '2021-09-01T00:00:00.000Z',
          benchmark: 10.5,
          choices: {
            create: [...defaultOverUnderSelections],
          },
        },
        {
          title: 'Jacksonville Jaguars',
          closingTime: '2021-09-01T00:00:00.000Z',
          benchmark: 6.5,
          choices: {
            create: [...defaultOverUnderSelections],
          },
        },
        {
          title: 'Los Angeles Chargers',
          closingTime: '2021-09-01T00:00:00.000Z',
          benchmark: 14.5,
          choices: {
            create: [...defaultOverUnderSelections],
          },
        },
        // pending
        {
          title: 'Seattle Seahawks',
          closingTime: '2021-01-01T00:00:00.000Z',
          benchmark: 9.5,
          choices: {
            create: [...defaultOverUnderSelections],
          },
        },
        {
          title: 'Green Bay Packers',
          closingTime: '2021-01-01T00:00:00.000Z',
          benchmark: 3.5,
          choices: {
            create: [...defaultOverUnderSelections],
          },
        },
        // settled
        {
          title: 'Baltimore Ravens',
          closingTime: '2021-01-01T00:00:00.000Z',
          benchmark: 11.5,
          choices: {
            create: [...overWinningOverUnderSelections],
          },
        },
      ],
    },
  },
  {
    name: '2020 NFL Over Under',
    description: 'Pick over under team totals',
    status: 'COMPLETE',
    entryFee: 25,
    lines: {
      create: [
        {
          title: 'Cleveland Browns',
          closingTime: '2020-09-01T00:00:00.000Z',
          benchmark: 10.5,
          choices: {
            create: [...defaultOverUnderSelections],
          },
          standings: {
            create: [...standingsSetA],
          },
        },
        {
          title: 'Tampa Bay Buccaneers',
          closingTime: '2020-09-01T00:00:00.000Z',
          benchmark: 6.5,
          choices: {
            create: [...defaultOverUnderSelections],
          },
          standings: {
            create: [...standingsSetB],
          },
        },
        {
          title: 'Los Angeles Rams',
          closingTime: '2020-09-01T00:00:00.000Z',
          benchmark: 2.5,
          choices: {
            create: [...defaultOverUnderSelections],
          },
          standings: {
            create: [...standingsSetC],
          },
        },
      ],
    },
  },
];
