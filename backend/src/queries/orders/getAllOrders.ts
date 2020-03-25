import { queryField, arg } from 'nexus';
import { paginationArgs, getPaginatedObjectType } from '../../utils/pagination';
import { OrderStatus } from '../../types';

export const GetAllOrders = queryField('getAllOrders', {
  type: getPaginatedObjectType('Order'),
  args: { ...paginationArgs, status: arg({ type: OrderStatus }) },
  nullable: false,
  resolve: async (_parent, { status, ...args }, ctx) => {
    const orders = await ctx.prisma.order.findMany({
      ...args,
      where: {
        status,
      },
      orderBy: { createdAt: 'desc' },
    });
    return {
      totalCount: await ctx.prisma.order.count(),
      items: orders,
    };
  },
});
