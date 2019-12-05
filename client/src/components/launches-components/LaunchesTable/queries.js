import {gql} from 'apollo-boost';

export const launchesQuery = gql`
query{
   launchesPast(limit: 10) {
   id
      mission_name
      details
      links {
        flickr_images
      }
    }
  }
  `;
