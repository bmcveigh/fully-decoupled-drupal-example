import * as React from 'react';
import Query from '../components/Query/Query';
import ARTICLES_QUERY from '../graphql/queries/articles';
import { Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Query query={ARTICLES_QUERY}>
      {(results: any): any => {
        return results.data.nodeQuery.entities.map((node: any) => (
          <Typography key={node.entityLabel} variant="h3">
            {node.entityLabel}
          </Typography>
        ));
      }}
    </Query>
  );
};

export default Home;
