import { Role } from "@prisma/client";


export interface UserProps {
  id: string;
  avatar_url: string | null;
  username: string;
  name: string | null;
  last_name: string | null;
  role: Role;
  password?: string;
  is_active: boolean;
  registered_at: Date;
  updated_at: Date;
}