import * as React from 'react';
import Query from '../../components/Query/Query';
import NodeArticleType from '../../types/NodeArticleType';
import NodeArticlesQueryResponse from '../../types/NodeArticlesQueryResponse';
import {
  createStyles,
  Divider,
  List, ListItem,
  ListItemText,
  Theme, Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react'
import RouterLink from '../Routes/RouterLink'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

const NodeArticleList = () => {
  const classes = useStyles();

  return (
    <Query endpoint="node/article">
      {(results: NodeArticlesQueryResponse): ReactElement|null => {
        if (!results.data) {
          return null;
        }
        const response = results.data;
        return (
          <List className={classes.root}>
            {response.data ? response.data.data.map((node: NodeArticleType) => (
              <React.Fragment key={node.attributes.drupal_internal__nid}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={<RouterLink to={`/node/${node.attributes.drupal_internal__nid}`}><Typography variant="h4">{node.attributes.title}</Typography></RouterLink>}
                    secondary={
                      node.attributes.body.summary ? (
                        <React.Fragment>
                          {node.attributes.body.summary}
                        </React.Fragment>
                      ) : null
                    }
                  >
                  </ListItemText>
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            )) : null}
          </List>
        )
      }}
    </Query>
  );
};

export default NodeArticleList;
