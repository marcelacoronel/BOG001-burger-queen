import Nav from "./Nav";
import Table from "./Table";

import React from 'react';
//-----------------------------



const SelectTable = () =>{
    return (
        <div>
            <h1>Selección de Mesa</h1>
            <div>
                <h3>Mesa seleccionada</h3>
                <h3>Mesa disponible</h3>
                <h3>Mesa ocupada</h3>
            </div>
            <Nav />
            <Table />
        </div>
    )
}


export default SelectTable;