import { JsonValue } from "type-fest";

export type Admin = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  password: string;
  roles: JsonValue;
};
