export interface IGetOptions<T> {
    loading: boolean;
    data: T | null;
    isError: boolean;
    error: unknown | any | null;
}

export interface IGetOption<T> {
    data: T | null;
}