import React from 'react';
import { AppBar, Container, createStyles, CssBaseline, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import Home from './pages/Home';
import Routes from './components/Routes/Routes'

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
    <div>
      <CssBaseline />
      <AppBar
          position="fixed"
        >
        <Toolbar>
          <Typography variant="h6" noWrap>
            My Decoupled Drupal Site
          </Typography>
        </Toolbar>
      </AppBar>
        <Container>
          <main className={classes.content}>
            <Routes />
          </main>
      </Container>
    </div>
  );
};

export default App;
