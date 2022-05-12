import React, { FunctionComponent } from 'react'

type PropImage = {
    image: string,
    name: string
}

const Image: FunctionComponent<PropImage> = ({image, name}) => {
  return (
    <img src={image} alt={name}></img>
  )
}

export default Image