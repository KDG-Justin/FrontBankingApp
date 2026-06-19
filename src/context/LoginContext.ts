import {createContext} from "react";
import type { IAccount } from "../model/Account";


export interface ILoginContext {
    account: IAccount | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (token: string, user: IAccount) => void; 
    logout: () => void;
}

export const LoginContext = createContext<ILoginContext>({
    account: null,
    token: null,
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
})