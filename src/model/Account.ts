import type { RoleType } from "./RoleType";


export interface IAccount{
    firstName : string;
    lastName : string;
    email : string;
    phoneNumber : number;
    balance : number;  
    role : RoleType;
}