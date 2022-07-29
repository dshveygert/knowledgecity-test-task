import {httpRequest} from "./httpRequest";
import {AuthUser} from "../models";

const authUrl = '/auth';
export const login = (user: AuthUser): Promise<{token: string} | void> => {
    console.log('API login');
    return httpRequest.post(`${authUrl}/signin`, user).then(r => r.data);
}
