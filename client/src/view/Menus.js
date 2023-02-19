import React, { useEffect, useState } from 'react'
import axios from 'axios';
import formularioproductos from '../components/formularioproductos';
import listadeproductos from '../components/listadeproductos';

const Menus = () => {
  const [ productos, setProductos ] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/productos')
      .then(response=>{
        console.log(response);
        setProductos(response.data);
      });
  },[])

  return (
    <div>
      <formularioproductos/>
      <hr/>
      {productos && <listadeproductos productos={productos}/>}
    </div>
  )
}

export default Menus;