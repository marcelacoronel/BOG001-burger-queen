// ----- Hoja de estilos --------
import '../src/css/styles.css';

// ----- Dependencias --------
import {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// ----- Componentes --------
import PageWaiter from '../src/components/pages/PageWaiter';
import Login  from '../src/components/Login';
import Layout from '../src/components/Layout';
import Table from "../src/components/Table";
import Breakfast from "../src/components/Breakfast";
import Lunch from "../src/components/Lunch";
import TakingOrder from "../src/components/TakingOrder";
import OrderDetail from './components/OrderDetail';
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
              <Route path="/table" component={Table} />
              <Route path="/order/:id" component={TakingOrder} />
              <Route path="/breakfast" component={Breakfast} />
              <Route path="/lunch" component={Lunch} />
              <Route path="/orderDetail" component={OrderDetail} />
              <Route path="/status" component={OrderStatus} />
          </Layout>
          <Route path="/404" component={NoFound} />
          <Redirect from="*" to="/404" />
        </Switch>
        
      </Router> 
    </div>
  );

}


export default App;
