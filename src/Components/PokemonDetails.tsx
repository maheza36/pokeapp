import React, { FunctionComponent } from 'react'
import { useGet } from '../Hooks/useGet';
import { IPokemonDetail } from '../Interfaces/IPokemonDetail';
import { PropsPokeDetail } from '../Types/PropsPokeDetail';
import PokemonInfo from './PokemonInfo';

const PokemonDetails: FunctionComponent<PropsPokeDetail> = ({url}) => {
    const [loading, data, isError, error] = useGet<IPokemonDetail>(url);
  return (
    <>
    { loading && <div>cargando...</div>}
    {
        isError ? <div>{error}</div> :
        <PokemonInfo PokemonInfo={data as IPokemonDetail}></PokemonInfo>
    }
    </>
  )
}

export default PokemonDetails