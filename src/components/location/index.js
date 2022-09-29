// Libraries
import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

// Components
import Resident from "./Resident";

// Styles
import styles from "./Location.module.scss";

const GET_LOCATIONS_BY_ID = gql`
  query getLocationsById($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
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

const Location = () => {
  const { locationId } = useParams();
  const { data, loading, error } = useQuery(GET_LOCATIONS_BY_ID, {
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
