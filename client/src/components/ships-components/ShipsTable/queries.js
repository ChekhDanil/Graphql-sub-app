import {gql} from 'apollo-boost';

export const directorsQuery = gql`
  query  {
  ships(limit:10){
    id
    name
    roles
    type
  }
}
`;
