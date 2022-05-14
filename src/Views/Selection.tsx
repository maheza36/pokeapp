import PokemonCard from '../Components/PokemonCard';
import useApi from '../Hooks/useApi';
import { IPokemonResult } from '../Interfaces/IPokemonResult';

const Selection = () => {
  const[loading, data, isError ,error] = useApi<IPokemonResult>("https://pokeapi.co/api/v2/pokemon?limit=10");
  
  return (
    <>
    <div>Selection</div>
    {
        loading ? <div>Cargando datos...</div> :
        isError ? 
        <div> <span>{error}</span> </div> : 
        <div>
            {
                data?.results.map(pokemon => 
                  <PokemonCard pokemon={pokemon}></PokemonCard>                  
                )
            }
        </div>
    }
    </>
  )
}


export default Selection;