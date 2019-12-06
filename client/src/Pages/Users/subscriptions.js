import { gql } from "apollo-boost";

const newUserSubscription = gql`
  subscription {
    newUser {
      id
      name
    }
  }
`;

export default newUserSubscription;
