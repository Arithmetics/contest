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
      ruleSet {
        maxBets
        maxSuperBets
        superBetPointCount
      }
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
            isSuper
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
  mutation MakeBet($choiceId: ID!, $userId: ID!, $isSuper: Boolean!) {
    createBet(
      data: {
        user: { connect: { id: $userId } }
        choice: { connect: { id: $choiceId } }
        isSuper: $isSuper
      }
    ) {
      id
      user {
        id
      }
      choice {
        id
        bets {
          id
          isSuper
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

export const TRACKER_STATUS_QUERY = gql`
  query TrackerStatus($contestId: ID!) {
    allLines(where: { contest: { id: $contestId } }) {
      id
      title
      benchmark
      image {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
      standings(orderBy: { gamesPlayed: asc }) {
        id
        wins
        gamesPlayed
        totalGames
      }
      choices {
        id
        selection
        isWin
        bets {
          id
          user {
            id
            userName
            avatarImage {
              altText
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;

export const LEADERBOARD_QUERY = gql`
  query Leaderboard($contestId: ID!) {
    allRegistrations(where: { contest: { id: $contestId } }) {
      id
      user {
        id
        userName
        # other stuff
        avatarImage {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
      counts {
        locked
        likely
        possible
      }
    }
  }
`;

export const USERS_BETS_QUERY = gql`
  query UsersContestBets($contestId: ID!, $userId: ID!) {
    allBets(where: { choice: { line: { contest: { id: $contestId } } }, user: { id: $userId } }) {
      id
      isSuper
    }
  }
`;
