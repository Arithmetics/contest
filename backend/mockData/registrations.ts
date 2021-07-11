import { RegistrationCreateInput } from '.keystone/types';
import { User, Contest } from '../../generated/graphql-types';

export function generaterateRegistrations(
  users: User[],
  contests: Contest[]
): RegistrationCreateInput[] {
  return [
    // Register all users for NFL Over Under 2020 (complete)
    {
      hasPaid: false,
      contest: { connect: { id: contests[1].id } },
      user: { connect: { id: users[0].id } },
    },
    {
      hasPaid: true,
      contest: { connect: { id: contests[1].id } },
      user: { connect: { id: users[1].id } },
    },
    {
      hasPaid: true,
      contest: { connect: { id: contests[1].id } },
      user: { connect: { id: users[2].id } },
    },
    {
      hasPaid: true,
      contest: { connect: { id: contests[1].id } },
      user: { connect: { id: users[3].id } },
    },
    // Register two users for NFL Over Under 2021
    {
      hasPaid: true,
      contest: { connect: { id: contests[0].id } },
      user: { connect: { id: users[2].id } },
    },
    {
      hasPaid: true,
      contest: { connect: { id: contests[0].id } },
      user: { connect: { id: users[3].id } },
    },
  ];
}
