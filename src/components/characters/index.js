// Libraries
import React from "react";
import { useQuery, gql } from "@apollo/client";

// Components
import CharacterDetails from "./CharacterDetails";

// Styles
import styles from "./Characters.module.scss";

const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      results {
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

const Characters = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  const characters = data && data.characters.results;

  return (
    <div className={styles.mainContainer}>
      <h1>All Characters</h1>
      <div className={styles.contentContainer}>
        {characters &&
          characters.map((character) => {
            return (
              <CharacterDetails key={character.id} character={character} />
            );
          })}
      </div>
    </div>
  );
};

export default Characters;
