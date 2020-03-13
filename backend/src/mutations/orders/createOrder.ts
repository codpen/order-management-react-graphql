import { objectType, arg, inputObjectType } from 'nexus';
import { UserInputError, ApolloError } from 'apollo-server-express';
import { OrderItemInput } from './addOrderItem';

export const OrderInput = inputObjectType({
  name: 'OrderInput',
  definition(t) {
    t.int('number', { nullable: false });
    t.float('totalPrice', { nullable: false });
    t.float('totalTax', { nullable: false });
    t.string('note');
    t.id('customerId');
    t.field('items', { type: OrderItemInput, list: true });
  },
});

export const CreateOrder = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('createOrder', {
      type: 'Order',
      args: {
        input: arg({ type: OrderInput, nullable: false }),
      },
      resolve: async (_, { input }, ctx) => {
        const user = await ctx.user.getCurrentUser();

        const existingOrder = await ctx.prisma.order.findOne({
          where: { number: input.number },
        });

        if (existingOrder) {
          throw new ApolloError(
            `Order number ${input.number} already exists`,
            'ORDER_NUMBER_EXISTS',
          );
        }

        return ctx.prisma.order.create({
          data: {
            number: input.number,
            totalPrice: input.totalPrice || 0,
            totalTax: input.totalTax || 0,
            note: input.note,
            status: 'new',
            customer: input.customerId
              ? {
                  connect: {
                    id: input.customerId,
                  },
                }
              : undefined,
            createdBy: {
              connect: {
                id: user.id,
              },
            },
          },
        });
      },
    });
  },
});
