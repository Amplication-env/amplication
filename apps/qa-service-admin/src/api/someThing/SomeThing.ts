import { Customer } from "../customer/Customer";

export type SomeThing = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  updatedAt: Date;
};
