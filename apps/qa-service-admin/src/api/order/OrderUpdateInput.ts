import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  quantity?: number | null;
  discount?: number | null;
  totalPrice?: number | null;
  product?: ProductWhereUniqueInput | null;
  status?: "PENDING" | "COMPLETED" | "CANCELLED" | null;
};
