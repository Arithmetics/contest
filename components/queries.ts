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
