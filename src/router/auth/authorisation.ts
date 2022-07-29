import {login} from "../../api/auth";
import {AuthUser} from "../../models";

const authTokenId = 'token';

const authorisation = {
    async signIn(user : AuthUser): Promise<AuthUser> {
        try {
            const response = await login(user);
            const token = response?.token ?? '';
            saveLocalToken(token);
            return Promise.resolve({...user, token})
        } catch (e) {
            return Promise.reject();
        }
    },
    signOut(callback: VoidFunction) {
        removeLocalToken();
        callback();
    },
};

const saveLocalToken = (token: string): void => {
    localStorage.setItem(authTokenId, token);
    return;
}
const getLocalToken = (): string => {
    return localStorage.getItem(authTokenId) ?? '';
}
const removeLocalToken = (): void => {
    localStorage.removeItem(authTokenId);
}
export const authToken = (): string => {
    return getLocalToken();
}
export const isAuthenticated = (): boolean => {
    return !!authToken()?.length;
}

export { authorisation };
