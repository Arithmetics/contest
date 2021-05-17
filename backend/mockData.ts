import { ChoiceCreateInput, ContestCreateInput, UserCreateInput } from '.keystone/types';

const defaultOverUnderSelections: ChoiceCreateInput[] = [
  {
    selection: 'OVER',
  },
  {
    selection: 'UNDER',
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
    status: 'IN_PROGRESS',
    entryFee: 25,
    lines: {
      create: [
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
      ],
    },
  },
];
