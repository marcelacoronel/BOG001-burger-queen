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

}

export default App;
