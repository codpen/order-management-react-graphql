import { nexusPrismaPlugin } from 'nexus-prisma';
import { makeSchema, objectType, intArg } from 'nexus';

import { Login } from './mutations/login';

require('dotenv').config();

const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token');
    t.field('user', { type: 'User' });
  },
});

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
  },
});

const Order = objectType({
  name: 'Order',
  definition(t) {
    t.model.number();
    t.model.createdBy();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.list.field('getAllOrders', {
      type: 'Order',
      resolve: (_parent, _args, ctx) => {
        return ctx.prisma.order.findMany();
      },
    });
  },
});

const CreateOrder = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('createOrder', {
      type: 'Order',
      args: {
        number: intArg({ nullable: false }),
      },
      resolve: async (_, { number }, ctx) => {
        const a = await ctx.user.getCurrentUser();
        return ctx.prisma.order.create({
          data: {
            number,
            createdBy: {
              connect: {
                id: '123',
              },
            },
          },
        });
      },
    });
  },
});

const Mutation = {
  CreateOrder,
  Login,
};

export const schema = makeSchema({
  types: [Query, User, Order, Mutation, AuthPayload],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
});
