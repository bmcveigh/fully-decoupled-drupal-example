import * as React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../../pages/Home';
import { Typography } from '@material-ui/core'
import NodeViewArticlePage from '../../pages/NodeViewArticlePage';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/node/:id">
          <NodeViewArticlePage />
        </Route>
        <Route path="/user/login">
          <Typography variant="h3">Login</Typography>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
