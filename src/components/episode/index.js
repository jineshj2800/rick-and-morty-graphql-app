// Libraries
import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

// Components
import FeaturedCharacter from "./FeaturedCharacter";

// Styles
import styles from "./Episode.module.scss";

const GET_EPISODES_BY_ID = gql`
  query getEpisodes($id: ID!) {
    episode(id: $id) {
      id
      name
      episode
      air_date
      characters {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

const Episode = () => {
  const { episodeId } = useParams();
  const { data, loading, error } = useQuery(GET_EPISODES_BY_ID, {
    variables: { id: episodeId },
  });

  const episode = data && data.episode;
  const characters = episode && episode.characters;

  return (
    episode && (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{episode.name}</h1>
          <span>Episode - {episode.episode}</span>
          <span>Air Date - {episode.air_date}</span>
        </div>
        <div className={styles.charactersContainer}>
          <h2>Characters Featured</h2>
          <div className={styles.featuredCharacters}>
            {characters &&
              characters.map((character) => {
                return (
                  <FeaturedCharacter key={character.id} character={character} />
                );
              })}
          </div>
        </div>
      </div>
    )
  );
};

export default Episode;
