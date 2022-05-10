import React, { FunctionComponent } from 'react'
import { IPokemonList } from '../Interfaces/IPokemonList'
import PokemonDetails from './PokemonDetails'

type PropsPokeCard = {
    pokemon: IPokemonList
}

const PokemonCard: FunctionComponent<PropsPokeCard> = ({pokemon}) => {
  return (
    <>
    <br/>
    <div style={
        {
            color: "Blue"
        }
    }>{pokemon.name}</div> 
    <PokemonDetails url={pokemon.url}></PokemonDetails>
    </>
  )
}

export default PokemonCard