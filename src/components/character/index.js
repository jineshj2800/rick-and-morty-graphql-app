// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

// Styles
import styles from "./Character.module.scss";

const GET_CHARACTER_BY_ID = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        name
        episode
        air_date
      }
    }
  }
`;

const Character = () => {
  const { characterId } = useParams();
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id: characterId },
  });

  const character = data && data.character;
  const episodes = character && character.episode;

  return (
    character && (
      <div className={styles.container}>
        <h1>{character.name}</h1>
        <div className={styles.detailsContainer}>
          <img src={character.image} alt="" height="400px" width="400px" />
          <div className={styles.details}>
            <span>
              <strong>Species: </strong>
              {character.species}
            </span>
            <span>
              <strong>Gender: </strong> {character.gender}
            </span>
            <span>
              <strong>Status: </strong> {character.status}
            </span>
            <span>
              <strong>Origin: </strong>
              {character.origin.name}
            </span>
            <span>
              <strong>Last Location: </strong> {character.location.name}
            </span>
          </div>
        </div>
        <div className={styles.episodeList}>
          <h2 style={{ textDecoration: "underline" }}>Episodes Featured</h2>
          <ul className={styles.episodeInfo}>
            {episodes &&
              episodes.map((episode) => {
                return (
                  <Link key={episode.id} to={`/episodes/${episode.id}`}>
                    <li>
                      <span>{episode.episode}</span>
                      <span>{episode.name}</span>
                      <span>{episode.air_date}</span>
                    </li>
                  </Link>
                );
              })}
          </ul>
        </div>
      </div>
    )
  );
};

export default Character;
