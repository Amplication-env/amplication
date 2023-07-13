import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { SomeThingWhereUniqueInput } from "../someThing/SomeThingWhereUniqueInput";

export type CustomerCreateInput = {
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  customerType?: "INDIVIDUAL" | "COMPANY" | null;
  someThing?: SomeThingWhereUniqueInput | null;
};
