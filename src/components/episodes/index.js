// Libraries
import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

// Styles
import styles from "./Episodes.module.scss";

const GET_EPISODES = gql`
  query getEpisodes($page: Int) {
    episodes(page: $page) {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

const Episodes = () => {
  const { data, loading, error } = useQuery(GET_EPISODES);

  const episodes = data && data.episodes.results;

  return (
    <div className={styles.container}>
      <h1>All Episodes</h1>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <h3>Episode</h3>
          <h3>Name</h3>
          <h3>Air Date</h3>
        </div>
        <ul className={styles.tableContent}>
          {episodes &&
            episodes.map((episode) => {
              return (
                <Link key={episode.id} to={`${episode.id}`}>
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
  );
};

export default Episodes;
