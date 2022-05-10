import React, { FunctionComponent } from 'react'
import { useGet } from '../Hooks/useGet';

type PropsPokeDetail = {
    url: string;
}

export interface IPokemonDetail {
    sprites: ISprite,
    stats: IStat[],    
}

export interface ISprite {
    front_default: string;
}

export interface IStat {
    base_stat: string
    stat: IStatDetail
}

export interface IStatDetail{
    name: string;
}

const PokemonDetails: FunctionComponent<PropsPokeDetail> = ({url}) => {
    const [loading, data, isError, error] = useGet<IPokemonDetail>(url);
  return (
    <>
    { loading && <div>cargando...</div>}
    {
        isError ? <div>{error}</div> :
        <div>
            <img src={data?.sprites.front_default} alt="Pokemon"></img>
            <ul>
                {
                    data?.stats.map(stat => {
                        return <li>
                            {stat.stat.name} : {stat.base_stat}
                        </li>
                    })
                }
            </ul>
        </div>
    }
    </>
  )
}

export default PokemonDetails