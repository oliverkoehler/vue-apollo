import gql from 'graphql-tag';

export const myUser = gql`
  query {
    myUser {
      _id
      name
    }
  }
`;