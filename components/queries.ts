import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    authenticatedItem {
      ... on User {
        id
        email
        name
        userName
        # other stuff
        avatarImage {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export const ALL_CONTESTS_QUERY = gql`
  query AllContests {
    allContests {
      id
      name
      description
      status
      entryFee
      lines {
        id
        choices {
          id
        }
      }
      registrations {
        id
        user {
          id
        }
      }
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export const CONTEST_BY_ID_QUERY = gql`
  query ContestById($id: ID!) {
    Contest(where: { id: $id }) {
      id
      name
      description
      status
      entryFee
      lines {
        id
        benchmark
        closingTime
        title
        choices {
          id
          selection
          isWin
          bets {
            id
            user {
              id
            }
          }
        }
      }
      registrations {
        id
        user {
          id
        }
      }
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export const CONTEST_REGISTRATION_MUTATION = gql`
  mutation ContestRegistration($userId: ID!, $contestId: ID!) {
    createRegistration(
      data: { user: { connect: { id: $userId } }, contest: { connect: { id: $contestId } } }
    ) {
      id
      contest {
        id
      }
      user {
        id
      }
    }
  }
`;

export const DELETE_CONTEST_REGISTRATIN_MUTATION = gql`
  mutation DeleteContestRegistration($id: ID!) {
    deleteRegistration(id: $id) {
      id
    }
  }
`;

export const MAKE_BET_MUTATION = gql`
  mutation MakeBet($choiceId: ID!, $userId: ID!) {
    createBet(
      data: { user: { connect: { id: $userId } }, choice: { connect: { id: $choiceId } } }
    ) {
      id
      user {
        id
      }
      choice {
        id
        bets {
          id
          user {
            id
          }
        }
        line {
          id
        }
      }
    }
  }
`;

export const DELETE_BET_MUTATION = gql`
  mutation DeleteBet($betId: ID!) {
    deleteBet(id: $betId) {
      id
      choice {
        id
        bets {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;
