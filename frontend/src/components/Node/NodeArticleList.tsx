import * as React from 'react';
import Query from '../../components/Query/Query';
import ARTICLES_QUERY from '../../graphql/queries/articles';
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
    <Query query={ARTICLES_QUERY}>
      {(results: NodeArticlesQueryResponse): ReactElement => {
        return (
          <List className={classes.root}>
            {results.data.nodeQuery.entities.map((node: NodeArticleType) => (
              <React.Fragment key={node.entityId}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={<RouterLink to={`/node/${node.entityId}`}><Typography variant="h4">{node.entityLabel}</Typography></RouterLink>}
                    secondary={
                      node.body.summary ? (
                        <React.Fragment>
                          {node.body.summary}
                        </React.Fragment>
                      ) : null
                    }
                  >
                  </ListItemText>
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>
        )
      }}
    </Query>
  );
};

export default NodeArticleList;
