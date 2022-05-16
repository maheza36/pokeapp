import React, { FunctionComponent, useEffect, useState } from 'react'
import { IPokemonDetail } from '../Interfaces/IPokemonDetail'
import { IPokemonPower } from '../Interfaces/IPokemonPower'
import ListWithRangeBattle from './ListWithRangeBattle'

export enum battleuserType  {
  local= "Local",
  visitante= "Visitante",
  none= ""
};

export enum defenseType {
  normal, 
  special
}

type PropsBattle = {
  pokemonLocal: IPokemonDetail,
  pokemonMachine: IPokemonDetail
}

const BattlePokemons: FunctionComponent<PropsBattle> = ({pokemonLocal, pokemonMachine}) => {

  const [powerLocal, setPowerLocal] = useState({...pokemonLocal.stats});
  const [powerMachine, setPowerMachine] = useState({...pokemonMachine.stats});

  const [isBattle, setIsBattle] = useState(true);
  const [isFinishBattle, setIsFinishBattle] = useState(false);
  const [gameTurn, setGameTurn] = useState(battleuserType.none);
  const [gameWin, setGameWin] = useState(battleuserType.none);
  const [gameMessage, setGameMessage] = useState("");

  useEffect(() => {
    const powerEmpty: IPokemonPower = {
      hp:0,
      attack: 0,
      defense:0,
      specialAttack:0,
      specialDefense:0,
      speed:0
    };
    // setPowerLocal({...pokemonLocal.stats});
    // setPowerMachine({...pokemonMachine.stats})
    
    return () => {
      setIsBattle(true);
      setIsFinishBattle(false);
      setGameTurn(battleuserType.none);
      setGameWin(battleuserType.none);
      setGameMessage("");
      // setPowerLocal({...powerEmpty});
      // setPowerMachine({...powerEmpty})
    }
  }, [])
  
  

  const startBattle = () => {
    setGameMessage("Preparando ataque... ");
    if(!isFinishBattle) {
      setTimeout(() => {
        battle(battleuserType.local);
      }, (2000));

      setTimeout(() => {
        battle(battleuserType.visitante);
      }, 4000);
      
    }

  }

  const battle = (gameTurn: battleuserType) => {
    let optionAttack = Math.round(Math.random());
    setGameMessage("atacando ... ");
    if(gameTurn === battleuserType.local){
      getPower(optionAttack, battleuserType.local);      
    }else {
      getPower(optionAttack, battleuserType.visitante);
    }
  }

  const getPower = (power: number, user: battleuserType) => {
    (power === 0) ? getAttack(user, normalAttack) : getAttack(user, especialAttack);    
  }

  const getAttack = (user: battleuserType, getAttack: Function) => {
    let hp: number, attack: number, defense: { defensa: defenseType; power: number }, speed: number;
    setGameTurn(user);
    setGameMessage("Lanzando ataque... ");
    switch (user) {
      case battleuserType.local:
        hp = powerMachine.hp;
        attack = getAttack(powerLocal.attack);
        defense = activeDefense(powerMachine, defenseType.normal);
        speed = powerLocal.speed;        
        updateBattle(user, hp, attack, defense, speed);
        break;
      case battleuserType.visitante:
        hp = powerLocal.hp;
        attack = getAttack(powerMachine.attack);
        defense = activeDefense(powerLocal, defenseType.normal);
        speed = powerMachine.speed;
        updateBattle(user, hp, attack, defense, speed);
        break;
      default:
        break;
    }
  }

  const updateBattle = (user: battleuserType ,hp: number, attack: number, defense: { defensa: defenseType; power: number }, speed: number) => {
    setGameMessage("Validando los HP del pokemon... ");
    switch(user){
      case battleuserType.local:
        if(speed > powerMachine.speed) {
         if(defense.defensa === defenseType.normal) { 
             powerMachine.hp = (hp - 4 - attack);
             powerMachine.defense -= defense.power;
             setPowerMachine({...powerMachine});
          } else { 
            powerMachine.hp = (hp - 2 - attack);
            powerMachine.specialDefense -= defense.power;
            setPowerMachine({...powerMachine});
          }
        }else{
          if(defense.defensa === defenseType.normal) { 
            powerMachine.hp = (hp - 1 - attack);
            powerMachine.defense -= defense.power;
            setPowerMachine({...powerMachine});
         } else { 
           powerMachine.hp = (hp - 2 - attack);
           powerMachine.specialDefense -= defense.power;
           setPowerMachine({...powerMachine});
         }
        }
      break;
      case battleuserType.visitante:
        if(powerMachine.speed > speed) {
          if(defense.defensa === defenseType.normal) { 
              powerLocal.hp = (hp - 4 - attack);
              powerLocal.defense -= defense.power;
              setPowerLocal({...powerLocal});
           } else { 
             powerLocal.hp = (hp - 2 - attack);
             powerLocal.specialDefense -= defense.power;
             setPowerLocal({...powerLocal});
           }
         }else{
           if(defense.defensa === defenseType.normal) { 
             powerLocal.hp = (hp - 1 - attack);
             powerLocal.defense -= defense.power;
             setPowerLocal({...powerLocal});
          } else { 
            powerLocal.hp = (hp - 2 - attack);
            powerLocal.specialDefense -= defense.power;
            setPowerLocal({...powerLocal});
          }
         }
      break;
      default:break;
    }
    validateWin();
  }

  const especialAttack = (power: number) => power / 4;
  const normalAttack = (power: number) => power / 6;

  const validateWin = () => {
    if(powerLocal.hp <= 0) {
      setPowerLocal({...powerMachine, hp: 0});
      setIsFinishBattle(true);
      setIsBattle(false);
      setGameWin(battleuserType.visitante);
      setGameTurn(battleuserType.none);
      setGameMessage("Humillante para el local, ha pedido en su terreno!!!");
    }
    if(powerMachine.hp <= 0) {
      setPowerMachine({...powerMachine, hp: 0});
      setIsFinishBattle(true);
      setIsBattle(false);
      setGameWin(battleuserType.local);
      setGameTurn(battleuserType.none);
      setGameMessage("Toda la afición local sabía que el triunfo sería de la casa!!!");
    }
    
  }

  const activeDefense = (power: IPokemonPower, defense: defenseType) => {
    if(defenseType.normal){
      if(power.defense > 2) {
        return {defensa: defenseType.normal , power: 1};
      }else{
        if(power.specialDefense > 1){
          return {defensa: defenseType.special , power: 2};
        }else{
          return {defensa: defenseType.normal , power: 0};
        } 
      }
    }else {
      if(power.specialDefense > 1) {
        return {defensa: defenseType.special , power: 2}
      }else
      {
        return {defensa: defenseType.special , power: 0};
      }
    }
  }
  

  return (
    <>

    <div style={{display: "flex", flexWrap: "wrap", paddingTop: "20px"}}>
        <div className='pokemon__retador' style={{width: "50%", textAlign: "center"}}>
            <ListWithRangeBattle listItems={powerLocal}></ListWithRangeBattle>
        </div>
        <div className='pokemon__maquina' style={{width: "50%", textAlign: "center"}}>                        
            <ListWithRangeBattle listItems={powerMachine}></ListWithRangeBattle>
        </div>                               
        <div style={{width: "100%", textAlign: "center", paddingTop: "35px"}}>
        {gameMessage}  {gameTurn}
        </div>
        {
          gameWin !== battleuserType.none && 
          <div style={{width: "100%", textAlign: "center", paddingTop: "35px", marginLeft: "150px", marginRight: "150px"}}>
              <div className="alert alert-dark">
              GANADOOOOR!!! {gameWin}
              </div>
          </div>
        }
    </div>
            { isBattle && <div style={{textAlign: "center", paddingTop: "35px"}}>
              <input type="button" className='btn btn-primary' value="Atacar!!!" onClick={startBattle}/>
            </div>}

    </>
  )
}

export default BattlePokemons

