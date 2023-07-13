import { Order } from "../order/Order";

export type Product = {
  orders?: Array<Order>;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  itemPrice: number | null;
  description: string | null;
};
