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
            <div className="mx-auto" style={{width: "460px"}}>
                <h4>
                Bienvenidos a las batallas pokemon!
                </h4>
            </div>
            <div className="container-fluid">
                <div className="row alert alert-info" role="alert">
                    <div className="col-sm-9">
                        <div >
                        Para jugar debes lanzar un ataque, automáticamente la maquina te atacará y podras volver atacar,
                        hasta que haya un ganador!!!
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <input type="button" value="Regresar" className='btn btn-dark btn-sm' onClick={handleBack}/>
                    </div>
                </div>            
            </div>
        </div>

        <div style={{display: "flex", flexWrap: "wrap"}}>
            <div style={{width: "50%", textAlign: "center"}}>
                <div>
                <h5>Pokemon Retador 
                    <span className='text-capitalize'> {pokemonBattle.name} </span>
                </h5>        
                </div>
                <Image image={pokemonBattle.sprites.front_default} name={PokemonInfo.name}></Image>
            </div>
            <div style={{width: "50%", textAlign: "center"}}>
                {
                    loading ? <div>Cargando Rival...</div> :                    
                    isError ? <div>{error}</div> :
                    <div>
                        <h5>Pokemon Maquina  
                            <span className='text-capitalize'> { data?.name}</span>
                        </h5>                            
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
    </>
  )
}

export default Battle