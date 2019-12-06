import { gql } from "apollo-boost";

export const newUserSubscription = gql`
  subscription {
    newUser {
      id
      name
    }
  }
`;
export default newUserSubscription;
