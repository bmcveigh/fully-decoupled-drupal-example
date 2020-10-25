import * as React from 'react';
import Query from '../../components/Query/Query';

import NODE_ARTICLE_QUERY from '../../graphql/queries/nodeArticle';

import {
  createStyles,
  Theme, Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import NodeByIdQueryResponse from '../../types/NodeByIdQueryResponse'

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

const NodeViewArticle = (props: RouteComponentProps<any>) => {
  return (
    <Query query={NODE_ARTICLE_QUERY} id={props.match.params.id}>
      {(results: NodeByIdQueryResponse): ReactElement => {
        return (
          <div>
            <Typography variant="h3">{results.data.nodeById.entityLabel}</Typography>
            <Typography variant="body1">
              {results.data.nodeById.body.value ? (
                <div dangerouslySetInnerHTML={{__html: results.data.nodeById.body.value}} />
              ) : null}
            </Typography>
          </div>
        )
      }}
    </Query>
  );
};

export default withRouter(NodeViewArticle);
