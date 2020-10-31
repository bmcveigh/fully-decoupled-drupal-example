import gql from 'graphql-tag';

/*

 */

const NODE_ARTICLE_QUERY = gql`
  query NodeArticle($id: String!) {
    nodeById(id: $id) {
      entityId,
      entityLabel,
      entityBundle,
      ...on NodeArticle {
        body {
          value
        }
      }
    },
    commentQuery(filter: {conditions: [{operator: EQUAL, field: "entity_id", value: [$id]}]}) {
      entities {
        entityId,
        entityLabel
      }
    }
  }
`;

export default NODE_ARTICLE_QUERY;
