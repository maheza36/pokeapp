import PokemonCard from '../Components/PokemonCard';
import { useGet } from '../Hooks/useGet';
import { IPokemonResult } from '../Interfaces/IPokemonResult';

const Selection = () => {
  const[loading, data, isError ,error] = useGet<IPokemonResult>("https://pokeapi.co/api/v2/pokemon?limit=100");

  return (
    <>
    <div>Selection</div>
    {loading && <div>Cargando datos...</div>}
    {
        isError ? 
        <div> <span>{error}</span> </div> : 
        <div>
            {
                data?.results.map(pokemon => {
                    return <PokemonCard pokemon={pokemon}></PokemonCard>
                })
            }
        </div>
    }
    </>
  )
}


export default Selection;