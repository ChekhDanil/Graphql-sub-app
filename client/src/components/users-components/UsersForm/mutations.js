import { gql } from 'apollo-boost';


export const addUserMutation = gql`
mutation ($name:String){
  insert_users(objects: {name:$name}) {
    returning {
      name
      id
    }
  }
}
`;
