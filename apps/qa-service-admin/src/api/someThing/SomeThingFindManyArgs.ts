import { SomeThingWhereInput } from "./SomeThingWhereInput";
import { SomeThingOrderByInput } from "./SomeThingOrderByInput";

export type SomeThingFindManyArgs = {
  where?: SomeThingWhereInput;
  orderBy?: Array<SomeThingOrderByInput>;
  skip?: number;
  take?: number;
};
