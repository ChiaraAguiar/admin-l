import React, { useState } from 'react'
import axios from 'axios';

const FormuProducts = () => {
    const [titulo, setTitulo] = useState(""); 
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/productos', {
            titulo,
            precio,
            descripcion,
        })
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Titulo:</label><br/>
                <input type="text" onChange = { e =>setTitulo(e.target.value)} value={titulo}/>
            </p>
            <p>
                <label>Precios:</label><br/>
                <input type="number" onChange = { e =>setPrecio(e.target.value)} value={precio}/>
            </p>

            <p>
                <label>Descripcion:</label><br/>
                <input type="text" onChange = { e =>setDescripcion(e.target.value)} value={descripcion}/>
            </p>

            <input type="submit"/>
        </form>
    )
}

export default FormuProducts;