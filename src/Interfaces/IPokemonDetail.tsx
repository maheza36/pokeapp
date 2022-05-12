
export interface IPokemonDetail {
    sprites: ISprite;
    stats: IStat[];
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
