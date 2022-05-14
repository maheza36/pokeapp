import axios from "axios";
import { IPokemonDetail } from "../Interfaces/IPokemonDetail";

export const tryGetPokemons = async (url:string, parse: boolean = false) => {
    try{
        const res = await axios.get(url);  
        return parse ? getPokemonDetail(res.data) : res.data;  
    }catch(error){
        return error;        
    }
}


export const tryGetPokemon = async (id:number) => {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await axios.get(url);    
        return getPokemonDetail(res.data);;
    }catch(error){
        return error;
    }
}

const getPokemonDetail = (data: any): IPokemonDetail => {
    const pokemon: IPokemonDetail = {
        id: data.id,
        name: data.name,
        sprites: {
            front_default: data.sprites['front_default']
        },
        stats: {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
            specialDefense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat
        }
    };
    return pokemon;
}