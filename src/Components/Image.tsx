import React, { FunctionComponent } from 'react'

type PropImage = {
    image: string,
    name: string
}

const Image: FunctionComponent<PropImage> = ({image, name}) => {
  return (
    <img className="card-img-top" src={image} alt={name} style={{
      height: "100px", width: "100px"
    }}></img>
  )
}

export default Image