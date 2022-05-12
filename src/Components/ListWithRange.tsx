import React, { FunctionComponent } from 'react'
import { IPropertiesRange } from '../Interfaces/IPropertiesRange';

type PropListWithRange = {
    listItems: IPropertiesRange[]
}

const ListWithRange: FunctionComponent<PropListWithRange> = ({listItems}) => {
  return (
    <>
        <ul>
            {
                listItems.map(element =>
                    <li>
                        {element.name} 
                        <progress value={element.value} max="100"></progress>
                    </li>
                )
            }
        </ul>
    </>
  )
}

export default ListWithRange