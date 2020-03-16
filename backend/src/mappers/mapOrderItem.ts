import { OrderItemCreateWithoutOrderInput, Enumerable } from '@prisma/client';
import { NexusGenInputs } from '../generated/nexus';

export const mapOrderItemInputToCreateOrderItem = (
  items: NexusGenInputs['OrderItemInput'][] | null | undefined,
  createdByUserId: string,
): Enumerable<OrderItemCreateWithoutOrderInput> | null => {
  if (!items) {
    return null;
  }
  return items.map(item => {
    return {
      material: { connect: { id: item.materialId } },
      name: item.name,
      width: item.width,
      height: item.height,
      pieces: item.pieces,
      totalPrice: item.totalPrice,
      totalTax: item.totalTax,
      createdBy: {
        connect: {
          id: createdByUserId,
        },
      },
    };
  });
};
