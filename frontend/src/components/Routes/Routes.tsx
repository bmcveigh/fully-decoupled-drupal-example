import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../../pages/Home';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import NodeViewArticlePage from '../../pages/NodeViewArticlePage';
import RouterLink from './RouterLink';

const Routes = () => {
  return (
    <Router>
      <AppBar
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            <RouterLink to="/">
              My Decoupled Drupal Site
            </RouterLink>
          </Typography>
        </Toolbar>
      </AppBar>
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
    </Router>
  );
};

export default Routes;
