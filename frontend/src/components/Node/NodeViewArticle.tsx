import * as React from 'react';
import Query from '../../components/Query/Query';

import NODE_ARTICLE_QUERY from '../../graphql/queries/nodeArticle';

import {
  Typography,
} from '@material-ui/core'
import { ReactElement } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import NodeByIdQueryResponse from '../../types/NodeByIdQueryResponse'

const NodeViewArticle = (props: RouteComponentProps<any>) => {
  return (
    <Query query={NODE_ARTICLE_QUERY} id={props.match.params.id}>
      {(results: NodeByIdQueryResponse): ReactElement => {
        return (
          <div>
            <Typography
              variant="h3">{results.data.nodeById.entityLabel}</Typography>
            {results.data.nodeById.body.value
              ?
              (<div
                dangerouslySetInnerHTML={{ __html: results.data.nodeById.body.value }}/>)
              : null}
          </div>
        )
      }}
    </Query>
  );
};

export default withRouter(NodeViewArticle);
