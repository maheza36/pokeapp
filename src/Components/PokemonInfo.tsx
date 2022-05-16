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
        <div className="card h-100">    
          <div style={{marginLeft: "33%"}}>
           <Image image={PokemonInfo.sprites.front_default} name={PokemonInfo.name}></Image>
          </div>        
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{PokemonInfo.name}</h5>
                    <p className="card-text">
                      <ListWithRange listItems={PokemonInfo.stats}></ListWithRange>
                    </p>
                  </div>
                  <div className="card-footer">                    
                      {
                          SelectPokemon && <PokemonSelect pokemonBattle={PokemonInfo} ></PokemonSelect>
                      }
                  </div>
        </div>
    </>
  )
}

export default PokemonInfo