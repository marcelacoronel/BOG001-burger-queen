import '../src/css/styles.css';
import Login from '../src/components/Login';
// import NavBar from '../src/components/NavBar';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import DetallePedido from '../src/components/DetallePedido';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          {/* <NavBar /> */}
          
          <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/desayuno" component={Breakfast} />
          <Route exact path="/almuerzo" component={Lunch} />
          <Route exact path="/detallePedido" component={DetallePedido} />
          </Switch>
        </Router> 
      </div>
    );
  }
}

export default App;
