import gql from 'graphql-tag';

export const loginUser = gql`
  mutation LoginUser(
    $username: String!
    $password: String!
    $platform: String!
  ) {
    loginUser(name: $username, password: $password, platform: $platform) {
      success
      msg
      code
    }
  }
`;

export const createUser = gql`
  mutation CreateUser(
    $username: String!
    $password: String!
    $email: String!
  ) {
    createUser(name: $username, password: $password, email: $email) {
      msg
      code
      success
    }
  }
`