import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default props => {
  const [productos, setProductos] = useState({})
  useEffect(() => {
    axios.get("http://localhost:8000/api/productos/" + props.match.params.id)
      .then(response => setProductos({
          ...response.data
      }))
  }, [])

  return (
    <div>
        <p>Titulo: {productos.titulo}</p>
        <p>Precios: {productos.precio}</p>
        <p>Descripcion: {productos.descripcion}</p>
    </div>
  )
}

