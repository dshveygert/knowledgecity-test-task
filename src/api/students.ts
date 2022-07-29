import { httpRequest } from './httpRequest';
import { StudentsResponse } from '../models';

const urlPath = '/app/students';
export const studentList = (page: number): Promise<StudentsResponse | void> => {
  console.log('API studentList');
  return httpRequest.get(`${urlPath}`, { params: { page } }).then((r) => r.data);
};
