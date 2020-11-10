import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Card} from 'antd';

import Home from '../Home';
import BlogLayout from '../BlogLayout';

export default App;

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/blogs' component={BlogLayout}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

function NotFound() {
  return(
    <div>
      <Card>
        You seem to be lost.
      </Card>
    </div>
  );
}

