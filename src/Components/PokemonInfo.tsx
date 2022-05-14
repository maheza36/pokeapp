import React, { FunctionComponent } from 'react'
import { IPokemonDetail } from "../Interfaces/IPokemonDetail";
import Image from "./Image";
import ListWithRange from './ListWithRange';
import PokemonSelect from './PokemonSelect';

type PropPokemonInfo = {
    PokemonInfo: IPokemonDetail;
    SelectPokemon: boolean
}

const PokemonInfo: FunctionComponent<PropPokemonInfo> = ({PokemonInfo, SelectPokemon}) => {

  return (
    <>    
        <div>    
            <Image image={PokemonInfo.sprites.front_default} name={PokemonInfo.name}></Image>
            <ListWithRange listItems={PokemonInfo.stats}></ListWithRange>
            {
                SelectPokemon && <PokemonSelect pokemonBattle={PokemonInfo} ></PokemonSelect>
            }
        </div>
    </>
  )
}

export default PokemonInfo