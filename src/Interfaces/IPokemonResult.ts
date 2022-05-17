import { IPokemonList } from "./IPokemonList";

export interface IPokemonResult {
    count: number;
    next: string;
    previous: string;
    results: IPokemonList[];
}
