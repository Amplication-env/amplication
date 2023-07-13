import { SortOrder } from "../../util/SortOrder";

export type ClassModelOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  newField?: SortOrder;
};
