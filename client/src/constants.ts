export const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

export interface IUser {
    username: string;
}
export interface IUserContext {
    user: IUser | null;
    login: (user:IUser) => void;
    logout: () => void;
}

export interface ISocketContext {
    login: (username:string, password:string) => Promise<IUser> | null;
}