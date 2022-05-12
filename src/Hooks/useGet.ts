
import axios from "axios";
import { useEffect, useState } from "react"
import { pokemonRequest } from "../Helpers/pokemonMemoization";
import { IGetOptions } from "../Interfaces/IGetOptions";

export const useGet = <T> (url: string)  => {
    const [data, setData] = useState<IGetOptions<T>>({
        loading: true,
        data: null,
        isError: false,
        error: null
    });

    useEffect(() => {
        GetData();
    },[])

    const GetData = async () => {
        try{
            const res = await axios.get(url);
            //const res = await pokemonRequest(url);
            setData({
                loading: false,
                error: null,
                data: res.data,
                isError: false
            });
        }catch(e){
            setData({
                loading: false,
                error: e,
                isError: true,
                data: null
            });
        }
    } 
    return [data.loading, data.data, data.isError, data.error] as const;
}

