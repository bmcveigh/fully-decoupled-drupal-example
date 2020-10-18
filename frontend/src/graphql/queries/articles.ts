import gql from 'graphql-tag';

// todo: modify this to work for Drupal.
const ARTICLES_QUERY = gql`
  query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["article"]}]}) {
      entities {
        entityLabel,
      }
    }
  }
`;

export default ARTICLES_QUERY;
