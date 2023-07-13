import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { SomeThingWhereUniqueInput } from "../someThing/SomeThingWhereUniqueInput";

export type CustomerWhereInput = {
  orders?: OrderListRelationFilter;
  someThing?: SomeThingWhereUniqueInput;
};
