import * as React from 'react';

import {
  Avatar, createStyles, Divider,
  List, ListItem, ListItemAvatar, ListItemText, Theme,
  Typography,
} from '@material-ui/core';
import EntitiesType from '../../types/EntitiesType';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
    },
    divider: {
      marginBottom: theme.spacing(2),
    },
    commentsText: {
      marginBottom: theme.spacing(2),
    },
    list: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

interface Props {
  entities: EntitiesType[];
}

const Comments = (props: Props) => {
  const classes = useStyles();

  const commentsList = (
    <List className={classes.list}>
      {props.entities ? props.entities.map(comment => (
        <React.Fragment key={comment.entityId}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={comment.entityLabel}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {comment.entityLabel}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      )) : null}
    </List>
  );

  const noComments = (
    <Typography variant="body1">No comments.</Typography>
  );

  return (
    <div className={classes.root}>
      <Divider className={classes.divider} />
      <Typography
        variant="h4"
        className={classes.commentsText}
      >
        Comments
      </Typography>
      {props.entities.length ? commentsList : noComments}
    </div>
  );
};

export default Comments;
