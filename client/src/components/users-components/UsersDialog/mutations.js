import {gql} from 'apollo-boost';

export const deleteUserMutation = gql`
mutation ($id: uuid) {
  delete_users(where: {id: {_eq: $id}}) {
    returning {
      id
      name
    }
  }
}


`;