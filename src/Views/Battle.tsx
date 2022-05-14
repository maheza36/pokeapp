import { useLocation, useNavigate } from 'react-router-dom'
import BattlePokemons from '../Components/BattlePokemons';
import PokemonInfo from '../Components/PokemonInfo';
import { usePokeMachine } from '../Hooks/usePokeMachine';
import { IPokemonDetail } from '../Interfaces/IPokemonDetail';
import Image from "../Components/Image";
import { useEffect } from 'react';

const Battle = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [loading, data, isError, error] = usePokeMachine();
    const pokemonMachine = data as IPokemonDetail;
    const pokemonBattle = location.state as IPokemonDetail;
    
    const handleBack = () => {
        navigate("/selection", {replace: true});
    }

  return (
      <>
        <div>
            <h3>Bienvenidos a las batallas pokemon!!!</h3>
            <input type="button" value="Regresar" onClick={handleBack}/>
            <div style={{display: "flex", flexWrap: "wrap", paddingLeft: "20px"}}>
                <div className='pokemon__retador' style={{width: "50%"}}>
                    <h4>Pokemon Retador</h4>
                    <div>
                        <span>{pokemonBattle.name}</span>
                    </div>
                    <Image image={pokemonBattle.sprites.front_default} name={PokemonInfo.name}></Image>
                </div>
                <div className='pokemon__maquina' style={{width: "50%"}}>
                    <h4>Pokemon Maquina</h4>
                    {
                        loading ? <div>Cargando Rival...</div> :                    
                        isError ? <div>{error}</div> :
                        <div>
                            <div>
                                <span>{data?.name}</span>
                            </div>
                            <Image image={pokemonMachine.sprites.front_default} name={pokemonMachine.name}></Image>
                        </div>
                    }
                </div>
                { loading ? <div>Cargando batalla...</div> :
                    <div style={{width: "100%"}}>
                        <BattlePokemons pokemonLocal={pokemonBattle} pokemonMachine={pokemonMachine}></BattlePokemons>
                    </div>                        
                }                
            </div>
        </div>
    </>
  )
}

export default Battle