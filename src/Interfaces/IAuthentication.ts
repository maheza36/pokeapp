export interface IAuthentication {
    name: string,
    user: string;
    token: string,
    timestamp: number
};

export interface IAuthenticationContext {
    user: IAuthentication,
    dispatch(): void
};