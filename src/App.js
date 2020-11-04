import './App.css';
import Login from '../src/components/Login';
import Mesas from '../src/components/Mesas';
import Desayuno from '../src/components/Desayuno';
import Almuerzo from '../src/components/Almuerzo';
import DetallePedido from '../src/components/DetallePedido';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Link to="/">Login</Link>
          <br></br>
          <Link to="/mesas">Vista mesero</Link>
          <Route exact path="/" component={Login} />
          <Route path="/mesas" component={Mesas} />
          <Route path="/desayuno" component={Desayuno} />
          <Route path="/almuerzo" component={Almuerzo} />
          <Route path="/detallePedido" component={DetallePedido} />
        </Router> 
      
      
      </div>
    );
  }
}

export default App;
