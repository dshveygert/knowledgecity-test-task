import axios from 'axios';
import { host } from './config';
import { mockupInit } from './mocks';

export const httpRequest = axios.create({
  baseURL: `${host()}/api/v1`,
  responseType: 'json',
});

export function setAuthorizationToken(token: string | undefined) {
  console.log('setAuthorizationToken', token);
  if (token) {
    httpRequest.defaults.headers.common['Authorization'] = token;
  } else {
    delete httpRequest.defaults.headers.common['Authorization'];
  }
}

// Comment next line for use a real API
mockupInit(httpRequest);
