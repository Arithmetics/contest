import gql from 'graphql-tag';

export const CHECK_IF_EMAIL_AVAILABLE_QUERY = gql`
  query CHECK_IF_EMAIL_AVAILABLE_QUERY($email: String!) {
    _allUsersMeta(where: { email: $email }) {
      count
    }
  }
`;

export const CHECK_IF_USERNAME_AVAILABLE_QUERY = gql`
  query CHECK_IF_USERNAME_AVAILABLE_QUERY($userName: String!) {
    _allUsersMeta(where: { userName: $userName }) {
      count
    }
  }
`;

export const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export const RESET_MUTATION = gql`
  mutation RESET_MUTATION($email: String!, $password: String!, $token: String!) {
    redeemUserPasswordResetToken(email: $email, token: $token, password: $password) {
      code
      message
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
          userName
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    endSession
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $userName: String!
    $password: String!
  ) {
    createUser(data: { email: $email, password: $password, name: $name, userName: $userName }) {
      id
      email
      name
      userName
    }
  }
`;
