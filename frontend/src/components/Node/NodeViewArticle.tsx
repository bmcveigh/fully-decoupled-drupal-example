import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Query from '../Query/Query';
import { Typography } from '@material-ui/core';
import { ReactElement } from 'react';
import NodeArticleQueryResponseType
  from '../../types/NodeArticleQueryResponseType';

const NodeViewArticle = (props: RouteComponentProps<any>) => {
  return (
    <Query endpoint={`node/article/${props.match.params.id}`}>
      {(results: NodeArticleQueryResponseType): ReactElement|null => {
        if (!results.data) {
          return null;
        }
        const response = results.data;

        if (!response.data) {
          return null;
        }

        const node = response.data.data;

        return (
          <div>
            <Typography
              variant="h3">{node.attributes.title}</Typography>
            {node.attributes.body.value
              ?
              (<div
                dangerouslySetInnerHTML={{ __html: node.attributes.body.value }}/>)
              : null}
            {/*<Comments entities={results.data.commentQuery.entities} />*/}
          </div>
        )
      }}
    </Query>
  );
};

export default withRouter(NodeViewArticle);
