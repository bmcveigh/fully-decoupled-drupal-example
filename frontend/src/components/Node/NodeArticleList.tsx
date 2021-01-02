import * as React from 'react';
import Query from '../../components/Query/Query';
import NodeArticleType from '../../types/NodeArticleType';
import NodeArticlesQueryResponse from '../../types/NodeArticlesQueryResponse';
import {
  createStyles,
  List, ListItem,
  ListItemText,
  Theme, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import TimeAgo from 'react-timeago';

import RouterLink from '../Routes/RouterLink';
import NodeUser from './NodeUser'


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

  // Sort by newest articles.
  const query = {
    sort: '-created',
  };

  return (
    <Query endpoint="node/article" query={query}>
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
                    primary={(
                      <>
                        <div>
                          <RouterLink to={`/node/${node.id}`}><Typography variant="h4">{node.attributes.title}</Typography></RouterLink>
                        </div>
                        <div>
                          Created <TimeAgo date={node.attributes.created} /> by <NodeUser href={node.relationships.uid.links.related.href} display="username" />
                        </div>
                      </>
                    )}
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
              </React.Fragment>
            )) : null}
          </List>
        )
      }}
    </Query>
  );
};

export default NodeArticleList;
