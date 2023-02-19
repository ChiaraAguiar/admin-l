import React from 'react'
import axios from 'axios';

export default props => {
  console.log(props.productos);
  return (
    <div>
      {props.productos.map((productos, npx)=>{
        return <p key={npx}>{productos.titulo}, {productos.precio} {productos.descripcion}</p>
      })}
    </div>
  )
}

