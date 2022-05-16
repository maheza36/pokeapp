import React, { FunctionComponent } from 'react'
import { IPokemonList } from '../Interfaces/IPokemonList'
import PokemonDetails from './PokemonDetails'

type PropsPokeCard = {
    pokemon: IPokemonList
}

const PokemonCard: FunctionComponent<PropsPokeCard> = ({pokemon}) => {
  return (
    <>
    <div className="col">
      <PokemonDetails url={pokemon.url}></PokemonDetails>
    </div>
    </>
  )
}

export default PokemonCard