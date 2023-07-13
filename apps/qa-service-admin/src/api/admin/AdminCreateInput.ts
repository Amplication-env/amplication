import { InputJsonValue } from "../../types";

export type AdminCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
};
