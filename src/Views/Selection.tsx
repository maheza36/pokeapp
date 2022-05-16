import PokemonCard from '../Components/PokemonCard';
import useApi from '../Hooks/useApi';
import { IPokemonResult } from '../Interfaces/IPokemonResult';

const Selection = () => {
  const[loading, data, isError ,error] = useApi<IPokemonResult>("https://pokeapi.co/api/v2/pokemon?limit=100");
  
  return (
    <>
    <div className="mx-auto" style={{width: "450px"}}>
      <h4>
        Selecciona tu pokemon favorito!
      </h4>
    </div>
    {
        loading ? <div>Cargando datos...</div> :
        isError ? 
        <div> <span>{error}</span> </div> : 
        <div className="container-fluid">
          <div className='row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4'>
            {
                data?.results.map(pokemon => 
                  <PokemonCard pokemon={pokemon}></PokemonCard>                  
                )
            }

        </div>
        </div>
    }
    </>
  )
}


export default Selection;