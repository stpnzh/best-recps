import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
