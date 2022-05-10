export interface IGetOptions<T> {
    loading: boolean;
    data: T | null;
    isError: boolean;
    error: unknown | any | null;
}
