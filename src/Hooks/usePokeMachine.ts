import { useEffect, useState } from "react"
import { IGetOptions } from "../Interfaces/IGetOptions";
import { IPokemonDetail } from "../Interfaces/IPokemonDetail";
import { tryGetPokemon } from "../Services/apiService";
import { useGet } from "./useGet";

export const usePokeMachine = () => {
    
    const [data, setData] = useState<IGetOptions<IPokemonDetail>>({
        loading: true,
        data: null,
        isError: false,
        error: null
    });
    
    
    useEffect(() => {
        GetPokemonMachine();
    }, [])
    
    
    const GetPokemonMachine = async () => {
        const compareValue = Math.random();
        (compareValue > 0.5) ? getNumber(1,898) : getNumber(10001,10288);
        const randomPokemonId = Math.floor(Math.random() * 898) + 1;
        const res = await tryGetPokemon(randomPokemonId);
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
                data: res as IPokemonDetail,
                isError: false,
                error: null
            });
        }
    }

    const getNumber = (min: number, max: number): number  =>  
    Math.floor(
        Math.random() * (max - min) + min
    )
    

    return [data.loading, data.data, data.isError, data.error] as const;
}