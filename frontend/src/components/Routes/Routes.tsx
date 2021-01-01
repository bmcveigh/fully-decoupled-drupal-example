import * as React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../../pages/Home';
import NodeViewArticlePage from '../../pages/NodeViewArticlePage';
import LoginPage from '../../pages/LoginPage';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/node/:id">
          <NodeViewArticlePage />
        </Route>
        <Route path="/user/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
