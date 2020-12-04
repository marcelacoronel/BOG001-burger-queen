// ----- Hoja de estilos --------
import '../src/css/styles.css';
//import NavBar from '../src/components/NavBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//import { Component } from 'react';

// ----- Dependencias --------
import {useState} from 'react';


// ----- Componentes --------
import PageWaiter from '../src/components/pages/PageWaiter';
import pageChef from '../src/components/pages/pageChef';
import Login  from '../src/components/Login';
import Layout from '../src/components/Layout';
import TakingOrder from "../src/components/TakingOrder";
import OrderStatus from "../src/components/OrderStatus";
import NoFound  from '../src/components/NoFound';


const App =() => {

  let currentPath =window.location.pathname;

  if (currentPath === '/'){
    localStorage.clear('activeUser')
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Layout>
              <Route exact path= "/pageWaiter/:user" component={PageWaiter}/>
              {/* <Route path="/table" component={Table} /> */}
              <Route path="/order" component={TakingOrder} />
              {/* <Route path="/order/:id" component={TakingOrder} /> */}
              <Route path="/status" component={OrderStatus} />
              <Route path="/pageChef" component={pageChef} />
          </Layout>
          <Route path="/404" component={NoFound} />
          <Redirect from="*" to="/404" />
        </Switch>
        
      </Router> 
    </div>
  );

}


export default App;
