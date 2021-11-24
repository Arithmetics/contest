import gql from 'graphql-tag';

export const CHECK_IF_EMAIL_AVAILABLE_QUERY = gql`
  query CheckIfEmailAvailable($email: String!) {
    usersCount(where: { email: { equals: $email } })
  }
`;

export const CHECK_IF_USERNAME_AVAILABLE_QUERY = gql`
  query CheckIfUsernameAvailable($userName: String!) {
    usersCount(where: { userName: { equals: $userName } })
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
  mutation UpdateUser($id: ID!, $name: String!, $userName: String!) {
    updateUser(where: { id: $id }, data: { name: $name, userName: $userName }) {
      id
      email
      userName
      name
    }
  }
`;

export const UPDATE_PASSWORD_MUTATION = gql`
  mutation UpdatePassword($id: ID!, $password: String!) {
    updateUser(where: { id: $id }, data: { password: $password }) {
      id
      email
      userName
      name
    }
  }
`;

export const UPDATE_USER_AVATAR_MUTATION = gql`
  mutation UpdateUserAvatar($id: ID!, $userName: String!, $image: Upload) {
    updateUser(
      where: { id: $id }
      data: { avatarImage: { create: { image: $image, altText: $userName } } }
    ) {
      id
      email
      userName
      name
      avatarImage {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;
