import * as React from 'react';
import Query from '../components/Query/Query';
import ARTICLES_QUERY from '../graphql/queries/articles';

const Home = () => {
  return (
    <Query query={ARTICLES_QUERY}>
      {(results: any): any => {
        return (
          <div>Test</div>
        );
      }}
    </Query>
  );
};

export default Home;
