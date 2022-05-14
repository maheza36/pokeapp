import React, { FunctionComponent } from 'react'
import useApi from '../Hooks/useApi';
import { IPokemonDetail } from '../Interfaces/IPokemonDetail';
import { PropsPokeDetail } from '../Types/PropsPokeDetail';
import PokemonInfo from './PokemonInfo';

const PokemonDetails: FunctionComponent<PropsPokeDetail> = ({url}) => {
    const [loading, data, isError, error] = useApi<IPokemonDetail>(url, true);

  return (
    <>
    { 
    loading ? <div>cargando...</div> : isError ? <div>{error}</div> : 
    <PokemonInfo PokemonInfo={data as IPokemonDetail} SelectPokemon={true}></PokemonInfo>
    }
    </>
  )
}

export default PokemonDetails