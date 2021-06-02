import gql from 'graphql-tag';

export const CHECK_IF_EMAIL_AVAILABLE_QUERY = gql`
  query CheckIfEmailAvailable($email: String!) {
    _allUsersMeta(where: { email: $email }) {
      count
    }
  }
`;

export const CHECK_IF_USERNAME_AVAILABLE_QUERY = gql`
  query CheckIfUsernameAvailable($userName: String!) {
    _allUsersMeta(where: { userName: $userName }) {
      count
    }
  }
`;

export const REQUEST_RESET_MUTATION = gql`
  mutation RequestReset($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export const RESET_MUTATION = gql`
  mutation Reset($email: String!, $password: String!, $token: String!) {
    redeemUserPasswordResetToken(email: $email, token: $token, password: $password) {
      code
      message
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
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
  mutation SignOut {
    endSession
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SignUp($email: String!, $name: String!, $userName: String!, $password: String!) {
    createUser(data: { email: $email, password: $password, name: $name, userName: $userName }) {
      id
      email
      name
      userName
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($id: String!, $name: String!, $userName: String!) {
    updateUser(id: $id, data: { name: $name, userName: $userName }) {
      id
      email
      userName
      name
    }
  }
`;
