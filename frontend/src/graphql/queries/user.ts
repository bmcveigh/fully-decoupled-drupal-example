import gql from 'graphql-tag';

// todo: modify this to work for Drupal.
const USER_QUERY = gql`
    query User($id: ID!) {
      user(id: $id) {
        _id,
        email,
        username
      }
    }
`;

export default USER_QUERY;
