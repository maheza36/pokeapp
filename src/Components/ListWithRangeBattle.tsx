import React, { FunctionComponent, useEffect } from 'react'
import { IPokemonPower } from '../Interfaces/IPokemonPower';

type PropListWithRange = {
    listItems: IPokemonPower
}

const ListWithRangeBattle: FunctionComponent<PropListWithRange> = ({listItems}) => {


    const getHpClass = (power: number) => {

        switch(true) {
            case (power >= 50):
                return '#23993E';
            case (power < 50 && power >= 20):
                return '#F5F514';
            case (power < 20):
                return '#FB0000';
        }
    }

    return (
    <>
        <ul style={{ listStyle: "none"}}>
            <li>Hp: <progress value={listItems.hp} max="250" style={
                {
                    accentColor: getHpClass(listItems.hp)
                }
            }></progress> {listItems.hp} </li>
            <li>Attack: <progress value={listItems.attack} max="150"></progress> {listItems.attack} </li>
            <li>Defense: <progress value={listItems.defense} max="150"></progress> {listItems.defense} </li>
            <li>Special Attack: <progress value={listItems.specialAttack} max="150"></progress> {listItems.specialAttack} </li>
            <li>Special Defense: <progress value={listItems.specialDefense} max="150"></progress> {listItems.specialDefense} </li>
            <li>Speed: <progress value={listItems.speed} max="150"></progress> {listItems.speed} </li>
        </ul>
    </>
  )

}
export default ListWithRangeBattle