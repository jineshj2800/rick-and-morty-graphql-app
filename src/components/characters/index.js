// Libraries
import React from "react";
import { useQuery, gql } from "@apollo/client";

// Components
import CharacterDetails from "./CharacterDetails";

// Styles
import styles from "./Characters.module.scss";

import { CHARACTERS_QUERY } from "../../utils/queries";

const Characters = () => {
  const { data, loading, error } = useQuery(CHARACTERS_QUERY);

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
