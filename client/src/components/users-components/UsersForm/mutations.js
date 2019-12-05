import { gql } from 'apollo-boost';


export const addUserMutation = gql`
mutation ($name:String!){
  addUser(name:$name) {
    returning {
  name
    }
  }
}
`;
