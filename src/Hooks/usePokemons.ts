import { useEffect, useState } from "react"
import { IGetOption} from "../Interfaces/IGetOptions";
import { tryGetPokemons } from "../Services/apiService";

export const usePokemons = <T> (url: string) => {
    const [data, setData] = useState<IGetOption<T>>({
        data: null,        
    });

    useEffect(() => {
        getData();
    }, [url])

    const getData = async () => {
        const res = await tryGetPokemons(url, false);
        if (res instanceof Error) {
            setData({
                data: null,                
            });
            
        }else {
            setData({
                data: res,                
            });
        }   
    }
    //[data.loading, data.data, data.isError, data.error] as const;
    return [data.data] as const;
}