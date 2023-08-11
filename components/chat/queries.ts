// import gql from 'graphql-tag';

// export const GET_CONTEST_CHAT_QUERY = gql`
//   query GetContestChat($contestId: ID!) {
//     chats(where: { contest: { id: { equals: $contestId } } }, sortBy: { createdAt: asc }}) {
//       id
//       content
//       user {
//         id
//         userName
//         name
//         avatarImage {
//           image {
//             publicUrlTransformed
//           }
//           altText
//         }
//       }
//     }
//   }
// `;

// export const CREATE_CHAT_MUTATION = gql`
//   mutation CreateChat($content: String!, $contestId: ID!, $userId: ID!) {
//     createChat(
//       data: {
//         content: $content
//         user: { connect: { id: $userId } }
//         contest: { connect: { id: $contestId } }
//       }
//     ) {
//       id
//       content
//       contest {
//         id
//         name
//       }
//       user {
//         id
//         name
//       }
//     }
//   }
// `;
