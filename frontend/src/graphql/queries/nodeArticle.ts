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
    }
  }
`;

export default NODE_ARTICLE_QUERY;
