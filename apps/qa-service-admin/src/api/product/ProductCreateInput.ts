import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  orders?: OrderCreateNestedManyWithoutProductsInput;
  name?: string | null;
  itemPrice?: number | null;
  description?: string | null;
};
