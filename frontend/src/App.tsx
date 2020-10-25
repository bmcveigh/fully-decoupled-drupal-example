import React from 'react';
import { Container, createStyles, CssBaseline, makeStyles, Theme } from '@material-ui/core';
import Routes from './components/Routes/Routes'
import { ApolloProvider } from 'react-apollo';

import client from './utils/apolloClient';
import { BrowserRouter as Router } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginTop: '80px',
    },
  }),
);

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <ApolloProvider client={client}>
        <CssBaseline />
        <Container>
          <main className={classes.content}>
            <Routes />
          </main>
        </Container>
      </ApolloProvider>
    </Router>
  );
};

export default App;
