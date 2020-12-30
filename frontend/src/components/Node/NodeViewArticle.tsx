import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'

const NodeViewArticle = (props: RouteComponentProps<any>) => {
  // return (
  //   <Query query={NODE_ARTICLE_QUERY} id={props.match.params.id}>
  //     {(results: NodeByIdQueryResponse): ReactElement => {
  //       return (
  //         <div>
  //           <Typography
  //             variant="h3">{results.data.nodeById.entityLabel}</Typography>
  //           {results.data.nodeById.body.value
  //             ?
  //             (<div
  //               dangerouslySetInnerHTML={{ __html: results.data.nodeById.body.value }}/>)
  //             : null}
  //           <Comments entities={results.data.commentQuery.entities} />
  //         </div>
  //       )
  //     }}
  //   </Query>
  // );

  return <div>TODO</div>
};

export default withRouter(NodeViewArticle);
