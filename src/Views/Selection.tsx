import { useEffect, useState } from 'react';
import PokemonCard from '../Components/PokemonCard';
import { usePokemons } from '../Hooks/usePokemons';
import { IPokemonList } from '../Interfaces/IPokemonList';
import { IPokemonResult } from '../Interfaces/IPokemonResult';

const Selection = () => {
  //const[loading, data, isError ,error] = useApi<IPokemonResult>("https://pokeapi.co/api/v2/pokemon?limit=100");

  const [limit, setLimit] = useState<string | null>("4");
  const [offset, setOffset] = useState<string | null>("0");
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const [data] = usePokemons<IPokemonResult>(url);
  const [myData, setMyData] = useState<IPokemonList[]>([]);
  const [isMoreData, setIsMoreData] = useState(true);

  useEffect(() => {    
    setMyData([...myData].concat(data?.results as IPokemonList[]));
    return () => {
      setMyData([]);
      setOffset("0");
      setLimit("4");
      setIsMoreData(true);
    }
  }, [data?.results]);  

  const handleUrl = () => { 
    setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    if(data?.next){
      const urlWithOutDomain = data.next.split('?')[1];
      const queryString = new URLSearchParams(urlWithOutDomain);
      if(queryString.has("offset") && queryString.has("limit") ){
        const newOffset = queryString.get("offset");
        const newLimit = queryString.get("limit");
        setOffset(newOffset);
        setLimit(newLimit);
        setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${newLimit}&offset=${newOffset}`);
      }
    }else{
      setIsMoreData(false);
    }
  }

  return (
    <>
    <div className="mx-auto" style={{width: "450px"}}>
      <h4>
        Selecciona tu pokemon favorito!
      </h4>
    </div>
    {
        <div className="container-fluid">
          <div className='row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4'>
            {
                myData.map(pokemon => 
                     pokemon && <PokemonCard pokemon={pokemon}></PokemonCard>                     
                )
            }

        </div>
        </div>
    }
    <div style={{
      paddingTop: "10px",
      paddingBottom: "10px",
      textAlign:"center"
    }}>
      {
        isMoreData && 
        <button onClick={handleUrl} className="btn btn-primary btn-sm"> Cargar Más...</button>
      }
    </div>
    </>
  )
}


export default Selection;