export const CONTEST_FIELDS = `
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
      title
      selection
      isWin
      points
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
`;
