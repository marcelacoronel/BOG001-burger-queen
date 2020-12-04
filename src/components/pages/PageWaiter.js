// import React, { useState } from 'react';
import NavBar from '../NavBar';



const PageWaiter = () => {

    let getActiveUser = JSON.parse(localStorage.getItem('activeUser'))

    return (
        
        <div className = "pageWaiter-container">
            <h1>VISTA MESERO {getActiveUser}</h1>
         
            <p>Revisar si se deja mensaje  o info aclarativa cuando se inicia sesión o cargar componente Table </p>
            
        </div>

    )

}

export default PageWaiter;