import React from 'react';
import NavBar from '../components/NavBar';

const Layout = (props) => {
 console.log(props);
    return (
        <div className="layout-color">
            <NavBar /> 
            {props.children}
        </div>
    )

}

export default Layout;

