import { gql } from "apollo-boost";

export const deleteUserMutation = gql`
  mutation($id: ID!) {
    deleteUser(id: $id) {
      id
      name
    }
  }
`;
