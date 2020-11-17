import React from 'react'
import imgHeartFoote from '../img/imgHeartFooter.png';


 const Footer = ()=> {
    return (
        <React.Fragment>
            <footer>
                <p>Hecho con  </p>
                <img src={imgHeartFoote} alt="heart"/>
                <p> - Stephanie Jolianis - Marcela Coronel - 2020</p>
            </footer> 
        </React.Fragment>
    )
}


export default Footer;