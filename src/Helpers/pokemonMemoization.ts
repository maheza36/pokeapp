import axios from "axios";


export const memoizationPokemon = (fn: Function) => {
    let result: any[] = [];
    return (arg: any) => {
        if(!result[arg]) {
            console.log("res no guardado");
            result[arg] = fn(arg);
        }else{
            console.log("res guardado");
        }
        return result[arg];
    }
}

export const  pokemonRequest = memoizationPokemon(async (url: string) => {
    console.log("vamo a ejecutar");
    return await axios.get(url);
});