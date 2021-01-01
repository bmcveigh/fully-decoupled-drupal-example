import React, { useState } from 'react'
import {
  AppBar, Button,
  Container,
  createMuiTheme,
  createStyles,
  CssBaseline, IconButton,
  makeStyles,
  Theme, ThemeProvider, Toolbar, Typography,
} from '@material-ui/core'

import { Brightness3, WbSunny } from '@material-ui/icons';

import Routes from './components/Routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom';
import RouterLink from './components/Routes/RouterLink';
import { QueryClient, QueryClientProvider } from 'react-query';
import SiteAvatar from './components/Avatar/SiteAvatar'

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
    siteAvatar: {
      marginRight: theme.spacing(3),
    },
    appBar: {
      flexGrow: 1,
    },
    appBarTitle: {
      flexGrow: 1,
    }
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
          <CssBaseline/>
          <AppBar
            position="fixed"
            className={classes.appBar}
          >
            <Toolbar>
              <span className={classes.siteAvatar}>
                <SiteAvatar />
              </span>
              <Typography variant="h6" className={classes.appBarTitle}>
                <RouterLink to="/">
                  My Fully Decoupled Drupal Site
                </RouterLink>
              </Typography>
              <RouterLink to="/user/login"><Button color="inherit">Login</Button></RouterLink>
              <IconButton aria-label="dark" onClick={changeTheme}>
                {isDark ? (
                  <Brightness3/>
                ) : (
                  <WbSunny className={classes.button}/>
                )}
              </IconButton>
            </Toolbar>
          </AppBar>
          <Container>
            <main className={classes.content}>
              <Routes/>
            </main>
          </Container>
        </QueryClientProvider>
      </Router>
    </ThemeProvider>
  )
};

export default App;
