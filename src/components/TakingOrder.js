import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
//------------------------------------------------

const TakingOrder = () => {
    const { id } = useParams();
    return (<div>
        <h2>Mesa {id}</h2>
                <p>Vista Toma de pedido</p>
                <button onClick={()=>window.location.href = "/selecttable" }>Regresar a Selección de mesa</button>
            </div>);
}


export default TakingOrder;