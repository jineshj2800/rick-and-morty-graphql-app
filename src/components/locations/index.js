// Libraries
import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

// Styles
import styles from "./Locations.module.scss";

// Utils
import { LOCATIONS_QUERY } from "../../utils/queries";

const Locations = () => {
  const { data, loading, error } = useQuery(LOCATIONS_QUERY);

  const locations = data && data.locations.results;

  return (
    <div className={styles.container}>
      <h1>All Locations</h1>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <h3>Name</h3>
          <h3>Type</h3>
          <h3>Dimension</h3>
        </div>
        <ul className={styles.tableContent}>
          {locations &&
            locations.map((location) => {
              return (
                <Link key={location.id} to={`${location.id}`}>
                  <li>
                    <span>{location.name}</span>
                    <span>{location.type}</span>
                    <span>{location.dimension}</span>
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Locations;
