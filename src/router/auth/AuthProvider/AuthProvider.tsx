import React, {useState, ReactNode, createContext, useEffect} from 'react';
import {authorisation, authToken, isAuthenticated} from '../authorisation';
import {AuthUser, User} from "../../../models";
import {userInfo} from "../../../api/users";
import {setAuthorizationToken} from "../../../api/httpRequest";

interface AuthContextType {
    user: User | null;
    signIn: (user: AuthUser, callback: VoidFunction) => void;
    signOut: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function useAuth() {
    return React.useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: ReactNode }) {
    let [user, setUser] = useState<User | null>(null);

    let signIn = async (user: AuthUser, callback: VoidFunction) => {
        const auth = await authorisation.signIn(user);
        setAuthorizationToken(auth?.token);
        return userInfo().then(response => {
            setUser(response as User);
            callback();
        });
    };

    let signOut = (callback: VoidFunction) => {
        return authorisation.signOut(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signIn, signOut };

    useEffect(() => {
        console.log('useEffect 1');
        if (isAuthenticated() && !user?.id) {
            setAuthorizationToken(authToken());
            userInfo().then(response => {
                setUser(response as User);
            });
        }
    }, []);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
