import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  orders?: OrderUpdateManyWithoutProductsInput;
  name?: string | null;
  itemPrice?: number | null;
  description?: string | null;
};
