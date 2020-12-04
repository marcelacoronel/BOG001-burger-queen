import React, { Fragment } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <Fragment>
            <div className="layout-color">
            <NavBar props={props}/> 
            {props.children}
            </div>
            <Footer/>
        </Fragment>
       
    )

}

export default Layout;

