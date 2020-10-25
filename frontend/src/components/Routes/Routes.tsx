import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../../pages/Home';
import { Typography } from '@material-ui/core';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/user/login">
          <Typography variant="h3">Login</Typography>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
