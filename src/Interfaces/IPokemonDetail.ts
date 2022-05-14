import { IPokemonPower } from "./IPokemonPower";

export interface IPokemonDetail {
    sprites: ISprite;
    stats: IPokemonPower;
    name: string;
    id: number;
}

export interface ISprite {
    front_default: string;
}

export interface IStat {
    base_stat: string;
    stat: IStatDetail;
}

export interface IStatDetail {
    name: string;
}
