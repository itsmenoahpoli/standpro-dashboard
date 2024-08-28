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

export interface RecordLog extends SharedTypes {
  type: "incoming" | "outgoing";
  date_received: string;
  time_released: string;
  date_letter: string;
  subject: string;
  from: string;
  agency: string;
  received_by: string;
  name_of_folder: string;
  file?: any;
  path?: string;
}
