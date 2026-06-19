import {useEffect, useState} from "react";
import type { ReactElement } from "react";
import type { IAccount } from "../model/Account";
import { LoginContext } from "./LoginContext";

export interface WithChildren {
    children: ReactElement | ReactElement[]
}

export function LoginContextProvider( {children} : WithChildren){
    const [token, setToken] = useState<string | null>(null);
    const [account, setAccount] = useState<IAccount | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const savedToken = localStorage.getItem("bank_token");
        const savedAccount = localStorage.getItem("bank_account");

        if (savedToken && savedAccount) {
            setToken(savedToken);
            setAccount(JSON.parse(savedAccount));
        }
        setLoading(false);
    }, []);

    const login = (newToken: string, newAccount: IAccount) => {
        setToken(newToken);
        setAccount(newAccount);
        localStorage.setItem("bank_token", newToken);
        localStorage.setItem("bank_account", JSON.stringify(newAccount));
    };

    const logout = () => {
        setToken(null);
        setAccount(null);
        localStorage.removeItem("bank_token");
        localStorage.removeItem("bank_account");
    };

    const isAuthenticated = !! token;

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <div className="text-gray-500 animate-pulse font-medium">
                    Checking secured connection...
                </div>
            </div>
        );
    }

    return (
        <LoginContext.Provider value={{ account, token, isAuthenticated, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
}