import React from "react";
import { createContext } from "react";
import USERS from "../mock/users";
import Context from "../context";

export const AuthContext = createContext(null);

export function AuthProvider({ children, user, setUser }) {
    const { setPopapShow, setAuthorizationError } = React.useContext(Context);

    React.useEffect(() => {
        if (user) {
            let finded = false;
            USERS.forEach(u => {
                if (user.login === u.login && user.password === u.password) {
                    finded = true;
                    return setUser(u);
                };
            });

            if (!finded) {
                setUser(null);
                localStorage.clear()
            };
        };
    }, [user, setUser]);

    const signin = (newUser, cb) => {
        let finded;
        USERS.forEach(u => {
            if (newUser.login === u.login && newUser.password === u.password) {
                localStorage.setItem('userDate', JSON.stringify(u));
                setPopapShow(false);
                setUser(newUser);
                cb();
                return finded = true;
            }
        });
        if(!finded) {
            setAuthorizationError(true);
        }
    };

    const signout = (cb) => {
        localStorage.clear();
        setUser(null);
        cb();
    };

    const value = { user, signin, signout }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;