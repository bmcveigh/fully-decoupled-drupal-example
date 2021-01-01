import * as React from 'react';
import {
  Button,
  createStyles,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import RouterLink from '../../components/Routes/RouterLink'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      textAlign: 'right',
      marginTop: theme.spacing(2),
    },
    button: {
      marginRight: theme.spacing(2),
    },
  }),
);

const LoginForm = () => {
  const classes = useStyles();

  return (
    <form>
      <Typography variant="h3">Login</Typography>
      <div>
        <TextField id="username" label="Username" fullWidth />
      </div>
      <div>
        <TextField id="password" label="Password" type="password" fullWidth />
      </div>
      <div className={classes.actions}>
        <Button
          color="primary"
          variant="contained"
          size="small"
          className={classes.button}
        >
          Login
        </Button>
        <RouterLink to="/">Forgot password?</RouterLink>
      </div>
    </form>
  )
}

export default LoginForm
