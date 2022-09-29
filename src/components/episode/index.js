// Libraries
import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

// Components
import FeaturedCharacter from "./FeaturedCharacter";

// Styles
import styles from "./Episode.module.scss";

// Utils
import { EPISODE_BY_ID_QUERY } from "../../utils/queries";

const Episode = () => {
  const { episodeId } = useParams();
  const { data, loading, error } = useQuery(EPISODE_BY_ID_QUERY, {
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
