import { gql } from 'apollo-boost';

export const directorsQuery = gql`
  query directorsQuery {
  ships(limit:10){
    id
    name
    roles
    speed_kn
    weight_kg
    type
    year_built
  }
}

`;
