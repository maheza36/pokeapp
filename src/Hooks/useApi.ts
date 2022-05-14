import { useEffect, useState } from "react";
import { IGetOptions } from "../Interfaces/IGetOptions";
import { tryGetPokemons } from "../Services/apiService";

const useApi = <T>(url:string, parse: boolean = false) => {
    const [data, setData] = useState<IGetOptions<T>>({
        loading: true,
        data: null,
        isError: false,
        error: null
    });

    useEffect(() => {
        GetData();
    }, [])

    const GetData = async() => {
        const res = await tryGetPokemons(url, parse);
        if (res instanceof Error) {
            setData({
                loading: false,
                data: null,
                isError: true,
                error: res.message
            });
        }else {
            setData({
                loading: false,
                data: res,
                isError: false,
                error: null
            });
        }        
    }
    return [data.loading, data.data, data.isError, data.error] as const;
}

export default useApi;