// ----- Hoja de estilos --------
import '../src/css/styles.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// ----- Componentes --------
import PageWaiter from '../src/components/pages/PageWaiter';
import Login  from '../src/components/Login';
import Layout from '../src/components/Layout';
import Table from "../src/components/Table";
import TakingOrder from "../src/components/TakingOrder";
import NoFound  from '../src/components/NoFound';
import Status from "./components/StatusOrder";
import Stock from "./components/Stock";
import Bill from "./components/Bill";
import SelectTable from "./components/SelectTable";


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
              <Route exact path="/table" component={Table} />
                <Route exact path="/order/:id" component={TakingOrder} />
                <Route exact path="/status" component={Status} />
                <Route exact path="/bill" component={Bill} />
                <Route exact path="/selecttable" component={SelectTable} />
                <Route exact path="/stock" component={Stock} />
          </Layout>
          <Route path="/404" component={NoFound} />
          <Redirect from="*" to="/404" />
        </Switch>
        
      </Router> 
    </div>
  );

}


export default App;
