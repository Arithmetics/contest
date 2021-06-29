import {
  ChoiceCreateInput,
  ContestCreateInput,
  StandingCreateInput,
  UserCreateInput,
} from '.keystone/types';

const defaultOverUnderSelections: ChoiceCreateInput[] = [
  {
    selection: 'OVER',
    isWin: false,
  },
  {
    selection: 'UNDER',
    isWin: false,
  },
];

const overWinningOverUnderSelections: ChoiceCreateInput[] = [
  {
    selection: 'OVER',
    isWin: true,
  },
  {
    selection: 'UNDER',
    isWin: false,
  },
];

const standingsSetA: StandingCreateInput[] = [
  {
    gamesPlayed: 1,
    wins: 1,
    totalGames: 17,
  },
  {
    gamesPlayed: 2,
    wins: 1,
    totalGames: 17,
  },
  {
    gamesPlayed: 3,
    wins: 2,
    totalGames: 17,
  },
  {
    gamesPlayed: 4,
    wins: 3,
    totalGames: 17,
  },
];

const standingsSetB: StandingCreateInput[] = [
  {
    gamesPlayed: 1,
    wins: 0,
    totalGames: 17,
  },
  {
    gamesPlayed: 2,
    wins: 1,
    totalGames: 17,
  },
  {
    gamesPlayed: 3,
    wins: 1,
    totalGames: 17,
  },
  {
    gamesPlayed: 4,
    wins: 2,
    totalGames: 17,
  },
];

export const users: UserCreateInput[] = [
  {
    email: 'brock.m.tillotson@gmail.com',
    name: 'brock t',
    userName: 'arithmetics',
    password: 'password',
    isAdmin: true,
  },
  {
    email: 'yo@yo.com',
    name: 'yo yo',
    userName: 'yoyoyoy',
    password: 'password',
    isAdmin: false,
  },
];

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
      ],
    },
  },
];
