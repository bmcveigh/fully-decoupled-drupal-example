import React from 'react';
import { Container, createStyles, CssBaseline, makeStyles, Theme } from '@material-ui/core';
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
        <Container>
          <main className={classes.content}>
            <Routes />
          </main>
      </Container>
    </div>
  );
};

export default App;
