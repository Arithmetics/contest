import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    authenticatedItem {
      ... on User {
        id
        email
        name
        userName
        isAdmin
        # other stuff
        avatarImage {
          id
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
    contests(orderBy: { name: desc }) {
      id
      name
      description
      status
      entryFee
      contestType
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
      winner {
        id
        userName
        avatarImage {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export const CONTEST_BY_ID_QUERY = gql`
  query ContestById($id: ID!) {
    contest(where: { id: $id }) {
      id
      name
      description
      status
      entryFee
      contestType
      ruleSet {
        maxBets
        maxSuperBets
        superBetPointCount
      }
      lines(orderBy: [{ closingTime: asc }, { benchmark: desc }]) {
        id
        benchmark
        closingTime
        title
        image {
          id
          image {
            publicUrlTransformed
          }
          altText
        }
        choices {
          id
          selection
          isWin
          image {
            id
            image {
              publicUrlTransformed
            }
            altText
          }
          secondaryImage {
            id
            image {
              publicUrlTransformed
            }
            altText
          }
        }
      }
      registrations {
        id
        hasPaid
        isPremium
        user {
          id
          email
          userName
          avatarImage {
            id
            altText
            image {
              publicUrlTransformed
            }
          }
        }
      }
      image {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
      winner {
        id
        userName
        avatarImage {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export const CONTEST_REGISTRATION_MUTATION = gql`
  mutation ContestRegistration($userId: ID!, $contestId: ID!) {
    createRegistration(
      data: {
        user: { connect: { id: $userId } }
        contest: { connect: { id: $contestId } }
        hasPaid: false
      }
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
    deleteRegistration(where: { id: $id }) {
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
      isSuper
      user {
        id
      }
      choice {
        id
      }
    }
  }
`;

export const DELETE_BET_MUTATION = gql`
  mutation DeleteBet($betId: ID!) {
    deleteBet(where: { id: $betId }) {
      id
    }
  }
`;

export const TRACKER_STATUS_QUERY = gql`
  query TrackerStatus($contestId: ID!) {
    lines(where: { contest: { id: { equals: $contestId } } }) {
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
        image {
          image {
            publicUrlTransformed
          }
          altText
        }
      }
    }
  }
`;

export const ATS_TRACKER_STATUS_QUERY = gql`
  query ATSTrackerStatus($contestId: ID!) {
    lines(where: { contest: { id: { equals: $contestId } } }) {
      id
      title
      benchmark
      closingTime
      image {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
      choices {
        id
        selection
        isWin
        image {
          image {
            publicUrlTransformed
          }
          altText
        }
        secondaryImage {
          image {
            publicUrlTransformed
          }
          altText
        }
        bets {
          id
          isSuper
          user {
            id
            email
          }
        }
      }
    }
  }
`;

export const LEADERBOARD_QUERY = gql`
  query Leaderboard($contestId: ID!) {
    registrations(where: { contest: { id: { equals: $contestId } } }) {
      id
      user {
        id
        userName
        avatarImage {
          id
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

export const CONTEST_BETS_QUERY = gql`
  query ContestBets($contestId: ID!) {
    bets(where: { choice: { line: { contest: { id: { equals: $contestId } } } } }) {
      id
      isSuper
      choice {
        id
      }
      user {
        id
        userName
        avatarImage {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export const ATS_LEADERBOARD_QUERY = gql`
  query ATSLeaderboardQuery($contestId: ID!) {
    contest(where: { id: $contestId }) {
      ruleSet {
        id
        superBetPointCount
        maxBets
        maxSuperBets
      }
      registrations {
        id
        isPremium
        user {
          id
          userName
          avatarImage {
            id
            altText
            image {
              publicUrlTransformed
            }
          }
        }
      }
      lines(orderBy: { closingTime: asc }) {
        id
        title
        closingTime
        choices {
          id
          selection
          isWin
          image {
            image {
              publicUrlTransformed
            }
            altText
          }
          secondaryImage {
            image {
              publicUrlTransformed
            }
            altText
          }
          bets {
            id
            isSuper
            user {
              id
            }
          }
        }
      }
    }
  }
`;

export const HISTORIES_BY_TYPE_QUERY = gql`
  query HistoriesByTypeQuery($contestType: HistoryContestTypeType!) {
    histories(where: { contestType: { equals: $contestType } }, orderBy: [{ year: asc }]) {
      id
      display
      year
      user {
        id
        userName
        avatarImage {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export const USERS_CONTEST_BETS_QUERY = gql`
  query UserContestBetsQuery($userId: ID!, $contestId: ID!) {
    contest(where: { id: $contestId }) {
      id
      lines {
        id
        benchmark
        closingTime
        title
        image {
          id
          image {
            publicUrlTransformed
          }
          altText
        }
        choices {
          id
          selection
          isWin
          status
          bets(where: { user: { id: { equals: $userId } } }) {
            id
            isSuper
          }
        }
      }
    }
  }
`;
