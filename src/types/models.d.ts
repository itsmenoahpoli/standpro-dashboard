import type { SharedTypes } from "./shared";

export interface UserRole extends SharedTypes {
  name: string;
}

export interface User extends SharedTypes {
  name: string;
  username: string;
  email: string;
  user_role_id?: number;
  user_role?: UserRole;
}
