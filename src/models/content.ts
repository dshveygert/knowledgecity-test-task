import { Students } from './user';

export interface Pages {
  current: number;
  perPage: number;
  total: number;
}

export interface StudentsResponse {
  total: number;
  data: Students[];
}

export type StudentGroupType = 'Default Group' | 'Custom Group';

export interface Group {
  id: number;
  name: StudentGroupType;
}
