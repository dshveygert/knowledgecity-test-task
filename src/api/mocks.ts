import MockAdapter from 'axios-mock-adapter';
import { host } from './config';
import { AxiosInstance } from 'axios';
import { Group } from '../models';

export function mockupInit(httpRequest: AxiosInstance) {
  const mockHttp = new MockAdapter(httpRequest);
  mockHttp.onPost(`${host()}/api/v1/auth/signin`).reply(200, {
    token: 'some-jwt-token',
  });
  mockHttp.onGet(`${host()}/api/v1/app/profile`).reply(200, {
    id: 1,
    first_name: 'Name',
    last_name: 'LastName',
    email: 'dementor@egggis.ru',
  });
  mockHttp.onGet(`${host()}/api/v1/app/students`, { params: { page: 1 } }).reply(200, {
    total: 24,
    data: [
      { study_group_id: 1, first_name: 'Name1', last_name: 'LastName1', email: 'name1@mail.com' },
      { study_group_id: 2, first_name: 'Name2', last_name: 'LastName2', email: 'name2@mail.com' },
      { study_group_id: 1, first_name: 'Name3', last_name: 'LastName3', email: 'name3@mail.com' },
      { study_group_id: 1, first_name: 'Name4', last_name: 'LastName4', email: 'name4@mail.com' },
      { study_group_id: 1, first_name: 'Name5', last_name: 'LastName5', email: 'name5@mail.com' },
    ],
  });
  mockHttp.onGet(`${host()}/api/v1/app/students`, { params: { page: 2 } }).reply(200, {
    total: 24,
    data: [
      { study_group_id: 1, first_name: 'Name6', last_name: 'LastName6', email: 'name1@mail.com' },
      { study_group_id: 1, first_name: 'Name7', last_name: 'LastName7', email: 'name2@mail.com' },
      { study_group_id: 2, first_name: 'Name8', last_name: 'LastName8', email: 'name3@mail.com' },
      { study_group_id: 1, first_name: 'Name9', last_name: 'LastName9', email: 'name4@mail.com' },
      { study_group_id: 1, first_name: 'Name10', last_name: 'LastName10', email: 'name5@mail.com' },
    ],
  });
  mockHttp.onGet(`${host()}/api/v1/app/students`, { params: { page: 3 } }).reply(200, {
    total: 24,
    data: [
      { study_group_id: 1, first_name: 'Name11', last_name: 'LastName11', email: 'name1@mail.com' },
      { study_group_id: 1, first_name: 'Name12', last_name: 'LastName12', email: 'name2@mail.com' },
      { study_group_id: 1, first_name: 'Name13', last_name: 'LastName13', email: 'name3@mail.com' },
      { study_group_id: 2, first_name: 'Name14', last_name: 'LastName14', email: 'name4@mail.com' },
      { study_group_id: 1, first_name: 'Name15', last_name: 'LastName15', email: 'name5@mail.com' },
    ],
  });
  mockHttp.onGet(`${host()}/api/v1/app/students`, { params: { page: 4 } }).reply(200, {
    total: 24,
    data: [
      { study_group_id: 1, first_name: 'Name16', last_name: 'LastName16', email: 'name1@mail.com' },
      { study_group_id: 2, first_name: 'Name17', last_name: 'LastName17', email: 'name2@mail.com' },
      { study_group_id: 1, first_name: 'Name18', last_name: 'LastName18', email: 'name3@mail.com' },
      { study_group_id: 1, first_name: 'Name19', last_name: 'LastName19', email: 'name3@mail.com' },
      { study_group_id: 1, first_name: 'Name20', last_name: 'LastName20', email: 'name3@mail.com' },
    ],
  });
  mockHttp.onGet(`${host()}/api/v1/app/students`, { params: { page: 5 } }).reply(200, {
    total: 24,
    data: [
      { study_group_id: 1, first_name: 'Name21', last_name: 'LastName21', email: 'name1@mail.com' },
      { study_group_id: 2, first_name: 'Name22', last_name: 'LastName22', email: 'name2@mail.com' },
      { study_group_id: 2, first_name: 'Name23', last_name: 'LastName23', email: 'name3@mail.com' },
      { study_group_id: 1, first_name: 'Name24', last_name: 'LastName24', email: 'name3@mail.com' },
    ],
  });
}

export const StudentGroups: Group[] = [
  { id: 1, name: 'Default Group' },
  { id: 2, name: 'Custom Group' },
];
