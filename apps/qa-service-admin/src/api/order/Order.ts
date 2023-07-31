import { Product } from "../product/Product";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: number | null;
  discount: number | null;
  totalPrice: number | null;
  product?: Product | null;
  status?: "PENDING" | "COMPLETED" | "CANCELLED" | null;
};
