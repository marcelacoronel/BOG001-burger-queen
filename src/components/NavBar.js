import React from 'react';
import { Link } from 'react-router-dom';
import logoBQNav from '../img/logoBQNav.png';
import iconoMesas from '../img/iconoTomarPedido.png';



class NavBar extends React.Component {
    render() {
        return <div className = "NavBarColor">
                <p> Barra Nav</p>
                <div>
                    <Link to="/">
                        <img src ={logoBQNav} alt=""/>
                        <span>Cerrar Sesión</span>
                    </Link>
                    <Link to="/mesas">
                        <img src ={iconoMesas} alt=""/>
                        <span>Tomar Pedidos</span>
                    </Link>
                </div>
        </div>
        
    }
}

export default NavBar;
