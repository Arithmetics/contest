// import path from 'path';
import { resetDatabase } from '@keystone-6/core/testing';
import { getContext } from '@keystone-6/core/context';
import baseConfig from '.././keystone';
import * as PrismaModule from '.prisma/client';

const dbUrl = `postgresql://brocktillotson:rock7900@localhost:5432/contest-test`;
// const prismaSchemaPath = path.join(__dirname, 'schema.prisma');
const config = { ...baseConfig, db: { ...baseConfig.db, url: dbUrl } };

const context = getContext(config, PrismaModule);

beforeEach(async () => {
  await resetDatabase(dbUrl, '/Users/brocktillotson/workspace/contest/backend/schema.prisma');
});

describe('User', () => {
  it('should create a user with the query api', async () => {
    const person = await context.query.User.createOne({
      data: {
        name: 'Brock',
        password: 'dont-use-me',
        userName: 'Arithmetics',
        email: 'brock@btbets.ml',
      },
      query: 'id name email userName password { isSet }',
    });
    expect(person.name).toEqual('Brock');
    expect(person.email).toEqual('brock@btbets.ml');
    expect(person.userName).toEqual('Arithmetics');
    expect(person.password.isSet).toEqual(true);
  });

  it('should throw when user is created with admin set and no sudo', async () => {
    let exception = null;
    try {
      await context.query.User.createOne({
        data: {
          name: 'Brock',
          password: 'dont-use-me',
          userName: 'Arithmetics',
          email: 'brock@btbets.ml',
          isAdmin: true,
        },
        query: 'id name email userName password { isSet }',
      });
    } catch (error) {
      exception = error as Error;
    }
    expect(exception?.message).toBe(
      'Access denied: You cannot create that User - you cannot create the fields ["isAdmin"]'
    );
  });

  it('should create an admin user when isAdmin set with sudo', async () => {
    const person = await context.sudo().query.User.createOne({
      data: {
        name: 'Brock',
        password: 'dont-use-me',
        userName: 'Arithmetics',
        email: 'brock@btbets.ml',
        isAdmin: true,
      },
      query: 'id name email userName isAdmin password { isSet }',
    });
    expect(person.name).toEqual('Brock');
    expect(person.email).toEqual('brock@btbets.ml');
    expect(person.userName).toEqual('Arithmetics');
    expect(person.isAdmin).toEqual(true);
    expect(person.password.isSet).toEqual(true);
  });
});
