import { queryField, arg, idArg, enumType } from "nexus";

import { paginationArgs, getPaginatedObjectType } from "../../utils/pagination";

import { OrderStatus } from "@backend/types";

export const GetAllOrders = queryField("getAllOrders", {
  type: getPaginatedObjectType("Order"),
  args: {
    ...paginationArgs,
    status: arg({ type: OrderStatus }),
    customerId: idArg(),
    orderByUrgency: enumType({ name: "OrderByArg", members: ["asc", "desc"] }),
  },
  resolve: async (
    _parent,
    { status, orderByUrgency, customerId, ...args },
    ctx
  ) => {
    const orders = await ctx.prisma.order.findMany({
      take: args.first ?? undefined,
      skip: args.skip ?? undefined,
      where: {
        status: status ?? undefined,
        customerId,
        deleted: false,
      },
      orderBy: orderByUrgency
        ? { urgency: orderByUrgency }
        : { createdAt: "desc" },
    });

    const allMatchingOrdersCount =
      orders.length > 0
        ? await ctx.prisma.order.count({
            where: {
              status: status ?? undefined,
              customerId,
              deleted: false,
            },
          })
        : 0;

    return {
      totalCount: allMatchingOrdersCount,
      items: orders,
    };
  },
});
