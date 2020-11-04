import '../src/css/styles.css';
// import PageWaiter from '../src/components/pages/PageWaiter';
// import Login  from '../src/components/Login';
import NoFound  from '../src/components/NoFound';
import {useState} from 'react';

// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


const App =() => {

  const [user, setUser] = useState("")

  return (
    <div className="App">
      <div>
        {user}
      </div>
      <NoFound id={setUser}/>
      {/* <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path= "/pageWaiter" component={PageWaiter}/>
        <Route path="/404" component={NoFound} />
        <Redirect from="*" to="/404" />
        </Switch>
        
      </Router>  */}
    </div>
  );

// import Login from './components/Login';
//import NavBar from '../src/components/NavBar';
// import Breakfast from './components/Breakfast';
// import Lunch from './components/Lunch';
// import DetallePedido from './components/DetallePedido';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Component } from 'react';

// ----- Componentes --------
// import Table from "./components/Table";
// import TakingOrder from "./components/TakingOrder";
// import Status from "./components/StatusOrder";
// import Stock from "./components/Stock";
// import Bill from "./components/Bill";
// import Nav from "./components/Nav";
// import SelectTable from "./components/SelectTable";

// const App = () => {
//   return (
//             <div className="App">
//               <Router>
//                 {/* <NavBar /> */}
//                 <Switch>
//                 <Route exact path="/" component={Login} />
//                 <Route path="/desayuno" component={Breakfast} />
//                 <Route path="/almuerzo" component={Lunch} />
//                 <Route path="/detallepedido" component={DetallePedido} />
//                 <Route path="/table" component={Table} />
//                 <Route path="/order/:id" component={TakingOrder} />
//                 <Route path="/status" component={Status} />
//                 <Route path="/stock" component={Stock} />
//                 <Route path="/bill" component={Bill} />
//                 <Route path="/nav" component={Nav} />
//                 <Route path="/selecttable" component={SelectTable} />
//                 </Switch>
//               </Router> 
//             </div>
//   )
// }

// export default App;
