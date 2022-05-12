import React, { FunctionComponent } from 'react'
import { IPokemonDetail } from "../Interfaces/IPokemonDetail";
import { IPropertiesRange } from '../Interfaces/IPropertiesRange';
import Image from "./Image";
import ListWithRange from './ListWithRange';

type PropPokemonInfo = {
    PokemonInfo: IPokemonDetail;
}

const PokemonInfo: FunctionComponent<PropPokemonInfo> = ({PokemonInfo}) => {

    const PokemonStats: IPropertiesRange[] = PokemonInfo.stats.map(p => {
        let item: IPropertiesRange = {name: p.stat.name, value: p.base_stat};
        return item;
    });
  return (
    <>    
        <div>    
            <Image image={PokemonInfo.sprites.front_default} name={PokemonInfo.name}></Image>
            <ListWithRange listItems={PokemonStats}></ListWithRange>            
        </div>
    </>
  )
}

export default PokemonInfo