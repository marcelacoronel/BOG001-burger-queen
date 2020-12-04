import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {firebase} from '../controller/firebase-config';

import iconLogout from '../img/iconLogout.png';
import loginNameLogo from '../img/imgNameLogo.png';
import imgLoginBurger from '../img/imgLoginBurger.png';


import NavBarData from '../data/NavBarData';

const NavBar = () => {
    let getDate = new Date()
    let currentDate = getDate.toDateString();
    let localTime = getDate.toLocaleTimeString();

    const history = useHistory();
    
     // Cerrar Sesión
     const signOut = () => firebase.auth().signOut()
     .then(() => {
         localStorage.removeItem('username');
         console.log('Saliendo...!');
         history.push('/');
     })
     .catch(() => {
     // console.log(error);
     });
   
    return (
        <div className = "navBar-container">

            <div className = "imgBurger">
                <img src ={imgLoginBurger} alt=""/>
            </div>
            <div className = "imgNameLogo">
                <img src ={loginNameLogo} alt=""/>
            </div>
            <nav>
                <ul>
                {NavBarData.map((item, index) => {
                    return (
                        <li key={index} className ={item.cName} >
                            <Link to={item.path}>
                                <div><img src ={item.icon} alt=""/> </div>
                                <div><span>{item.title}</span></div>
                            </Link>
                        </li> 
                    )
                })}
                    
                    {/* <li>
                        <Link to="/">
                            <div><img src ={iconLogout} alt=""/></div>
                            <div><span>Cerrar Sesión</span></div>
                        </Link>
                    </li>     */}
                </ul>  
            </nav> 

            <div>
                
                <button className="btnSignOut" onClick={signOut}>
                    <div><img src ={iconLogout} alt=""/></div>
                    Cerrar sesión
                </button>
            </div>
            
            <div className="time">
                <span>{localTime}</span> 
            </div>  
            <div className="date">
                <span>{currentDate}</span>
            </div>                
        </div>
    )
}


export default NavBar;
