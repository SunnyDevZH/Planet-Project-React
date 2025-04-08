import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PlanetDetails = () => {
  const { name } = useParams();
  const planet = useSelector((state) =>
    state.planets.find((planet) => planet.name === name)
  );

  if (!planet) {
    return <p>Planet nicht gefunden!</p>;
  }

  return (
    <div>
      <h2>{planet.name}</h2>
      <p><strong>Durchmesser:</strong> {planet.diameter} km</p>
      <p><strong>Gravitation:</strong> {planet.gravity}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <p><strong>Bevölkerung:</strong> {planet.population}</p>
    </div>
  );
};

export default PlanetDetails;