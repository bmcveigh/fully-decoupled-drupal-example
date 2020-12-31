import React, { useState } from 'react'
import {
  AppBar,
  Container,
  createMuiTheme,
  createStyles,
  CssBaseline, IconButton,
  makeStyles,
  Theme, ThemeProvider, Toolbar, Typography,
} from '@material-ui/core';

import { Brightness3, WbSunny } from '@material-ui/icons';

import Routes from './components/Routes/Routes'
import { ApolloProvider } from 'react-apollo';

import client from './utils/apolloClient';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterLink from './components/Routes/RouterLink';
import { QueryClient, QueryClientProvider } from 'react-query';

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
    button: {
      color: 'orange',
    },
  }),
);

const lightTheme = createMuiTheme({
  palette: {
    type: "light"
  }
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const App = () => {
  const classes = useStyles();
  const userTheme = localStorage.getItem('user_preferred_theme');
  const [isDark, toggleDark] = useState(userTheme && userTheme === 'dark');
  const queryClient = new QueryClient();

  const changeTheme = () => {
    localStorage.setItem('user_preferred_theme', userTheme === 'dark' ? 'light': 'dark');
    toggleDark(prev => !prev);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <ApolloProvider client={client}>
            <CssBaseline />
            <AppBar
              position="fixed"
            >
              <Toolbar>
                <Typography variant="h6" noWrap>
                  <RouterLink to="/">
                    My Decoupled Drupal Site
                  </RouterLink>
                </Typography>
                <IconButton aria-label="dark" onClick={changeTheme}>
                  {isDark ? (
                    <Brightness3 />
                  ) : (
                    <WbSunny className={classes.button} />
                  )}
                </IconButton>
              </Toolbar>
            </AppBar>
            <Container>

              <main className={classes.content}>
                <Routes />
              </main>
            </Container>
          </ApolloProvider>
        </QueryClientProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
