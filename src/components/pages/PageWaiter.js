import React, { useState } from 'react';
// import {route, switch } from 'react-router-dom';
import { useParams } from "react-router-dom";

import Table from '../Table';

const PageWaiter = () => {

    const {user} = useParams();

    return (
        <div className = "pageWaiter-container">
            <h1>VISTA MESERO </h1>
            <p>Usuario logueado {user}</p>
           
        </div>
    )

}

export default PageWaiter;