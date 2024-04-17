export interface User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    isDisabled: boolean;
    userName: string;
    password: string;
    email: string;
    accessToken: string;
    permissions:[];
    isTempPassword:boolean;
    imageUrl:string;
}
export interface LoginInfo { 
    email: string
    password: string;
}
