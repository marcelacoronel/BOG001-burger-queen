import React from 'react';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav';
const Layout = (props) => {
    return (
        <div className="layout-color">
            <NavBar /> 
            {props.children}
        </div>
    )

}

export default Layout;

