export const users = [
  {
    email: 'brock.m.tillotson@gmail.com',
    name: 'yo yo',
    userName: 'yoyoyoy',
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

export const contests = [
  {
    name: '2021 NFL Over Under',
    description: 'Pick over under team totals',
    status: 'IN_PROGRESS',
    entryFee: 25,
    lines: {
      create: [
        {
          title: 'Pittsburgh Steelers',
          closingTime: '1970-01-01T00:00:00.000Z',
          benchmark: 10.5,
          choices: {
            create: [
              {
                selection: 'OVER',
              },
              {
                selection: 'UNDER',
              },
            ],
          },
        },
        {
          title: 'Jacksonville Jaguars',
          closingTime: '1970-01-01T00:00:00.000Z',
          benchmark: 6.5,
          choices: {
            create: [
              {
                selection: 'OVER',
              },
              {
                selection: 'UNDER',
              },
            ],
          },
        },
      ],
    },
  },
];
