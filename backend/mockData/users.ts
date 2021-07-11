import { UserCreateInput } from '.keystone/types';

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
  {
    email: 'hey@hey.com',
    name: 'hey hey',
    userName: 'heyhey',
    password: 'password',
    isAdmin: false,
  },
  {
    email: 'wow@wow.com',
    name: 'wow wow',
    userName: 'wowwow',
    password: 'password',
    isAdmin: false,
  },
];
