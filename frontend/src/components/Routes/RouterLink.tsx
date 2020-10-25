import * as React from 'react';
import {
  createStyles,
  Theme,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'inherit',
      textDecoration: 'inherit',
    },
  }),
);

const RouterLink = (props: any): any => {
  const classes = useStyles();

  return (
    <Link
      to={props.to}
      className={classes.root}
    >
      {props.children}
    </Link>
  );
};

export default RouterLink;
