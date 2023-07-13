import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type SomeThingCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
};
