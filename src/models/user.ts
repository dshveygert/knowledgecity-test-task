export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface AuthUser {
  email: string;
  password: string;
  token?: string;
}

export interface Students {
  study_group_id: number;
  first_name: string;
  last_name: string;
  email: string;
}
