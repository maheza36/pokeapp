import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom'
import { IPokemonDetail } from '../Interfaces/IPokemonDetail';

type PropPokemonSelect = {
    pokemonBattle: IPokemonDetail
}

const PokemonSelect: FunctionComponent<PropPokemonSelect> = ({pokemonBattle}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Battle", {state: pokemonBattle, replace: true });
    }
  return (
    <>
    <button type='button' onClick={handleClick}>Seleccionar</button>
    </>
  )
}

export default PokemonSelect