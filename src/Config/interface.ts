export interface UserInterface {
    name: string;
    email: string;
    password: string;
}

export interface TodoInterface {
    id:number;
    title: string;
    description: string;
    date:string;
    userId:number;
}