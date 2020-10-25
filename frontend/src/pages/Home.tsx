import * as React from 'react';
import Query from '../components/Query/Query';
import ARTICLES_QUERY from '../graphql/queries/articles';
import NodeArticle from '../components/Node/NodeArticle';
import NodeArticleType from '../types/NodeArticleType';
import NodeArticlesQueryResponse from '../types/NodeArticlesQueryResponse'

const Home = () => {
  return (
    <Query query={ARTICLES_QUERY}>
      {(results: NodeArticlesQueryResponse): any => {
        return results.data.nodeQuery.entities.map((node: NodeArticleType) => (
          <NodeArticle node={node} key={node.entityId} />
        ));
      }}
    </Query>
  );
};

export default Home;
