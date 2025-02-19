import React from 'react';
import PlanetCanvas from './Planet';

const PlanetTable = ({ planets, deletePlanet }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getRandomSize = () => {
    return Math.random() * 2 + 1; // Größe zwischen 1 und 3
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Durchmesser (km)</th>
          <th>Gravitation</th>
          <th>Terrain</th>
          <th>Bevölkerung</th>
          <th>Notable Residents</th>
          <th>Aktionen</th>
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, index) => (
          <tr key={index}>
            <td className="planet-name">
              <PlanetCanvas color={getRandomColor()} size={getRandomSize()} />
              {planet.name}
            </td>
            <td>{planet.diameter}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.population}</td>
            <td>{
            planet.residents.map((resident, index) => (
              <div key={index}>
                <h3>{resident.name}</h3>
                <p>Birth: {resident.birthYear} Height: {resident.height}</p>
              </div>
            ))}
            </td>
            <td>
              <button className="delete-button" onClick={() => deletePlanet(planet.name)}>Löschen</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlanetTable;