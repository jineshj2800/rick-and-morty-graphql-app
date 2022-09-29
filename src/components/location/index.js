// Libraries
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// Components
import Resident from "./Resident";

// Styles
import styles from "./Location.module.scss";

// Utils
import { LOCATION_BY_ID_QUERY } from "../../utils/queries";

const Location = () => {
  const { locationId } = useParams();
  const { data, loading, error } = useQuery(LOCATION_BY_ID_QUERY, {
    variables: { id: locationId },
  });

  const location = data && data.location;
  const residents = location && location.residents;

  return (
    location && (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{location.name}</h1>
          <span>Type - {location.type}</span>
          <span>Dimension - {location.dimension}</span>
        </div>
        <div className={styles.residentsContainer}>
          <h2>Residents</h2>
          <div className={styles.residents}>
            {residents &&
              residents.map((resident) => {
                return <Resident key={resident.id} character={resident} />;
              })}
          </div>
        </div>
      </div>
    )
  );
};

export default Location;
