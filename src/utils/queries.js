import { gql } from "@apollo/client";

const CHARACTER_FIELDS = gql`
  fragment characterFields on Character {
    id
    name
    status
    species
    gender
    image
  }
`;

const EPISODE_FIELDS = gql`
  fragment episodeFields on Episode {
    id
    name
    episode
    air_date
  }
`;

const LOCATION_FIELDS = gql`
  fragment locationFields on Location {
    id
    name
    type
    dimension
  }
`;

export const CHARACTERS_QUERY = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      results {
        ...characterFields
      }
    }
  }
  ${CHARACTER_FIELDS}
`;

export const EPISODES_QUERY = gql`
  query getEpisodes($page: Int) {
    episodes(page: $page) {
      results {
        ...episodeFields
      }
    }
  }
  ${EPISODE_FIELDS}
`;

export const LOCATIONS_QUERY = gql`
  query getLocations($page: Int) {
    locations(page: $page) {
      results {
        ...locationFields
      }
    }
  }
  ${LOCATION_FIELDS}
`;

export const CHARACTER_BY_ID_QUERY = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      ...characterFields
      origin {
        name
      }
      location {
        name
      }
      episode {
        ...episodeFields
      }
    }
  }
  ${CHARACTER_FIELDS}
  ${EPISODE_FIELDS}
`;

export const EPISODE_BY_ID_QUERY = gql`
  query getEpisodeById($id: ID!) {
    episode(id: $id) {
      ...episodeFields
      characters {
        ...characterFields
      }
    }
  }
  ${EPISODE_FIELDS}
  ${CHARACTER_FIELDS}
`;

export const LOCATION_BY_ID_QUERY = gql`
  query getLocationsById($id: ID!) {
    location(id: $id) {
      ...locationFields
      residents {
        ...characterFields
      }
    }
  }
  ${LOCATION_FIELDS}
  ${CHARACTER_FIELDS}
`;
