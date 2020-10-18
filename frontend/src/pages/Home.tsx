import * as React from 'react';
import Query from '../components/Query/Query';
import ARTICLES_QUERY from '../graphql/queries/articles';

const Home = () => {
  return (
    <Query query={ARTICLES_QUERY}>
      {(results: any): any => {
        return results.data.nodeQuery.entities.map((node: any) => (
          <div>{node.entityLabel}</div>
        ));
      }}
    </Query>
  );
};

export default Home;
