
import React from 'react';

const NoFound = ({id}) => {

    const cambio = (e)=>{
        e.preventDefault();
        id(e.target.value)
    }
    return (
        <div>
        <h1>Página NO encontrada 404</h1>
        <label>ENtrada</label>
        <input onChange={cambio}> 
        </input>
        </div>
    )
}

export default NoFound;