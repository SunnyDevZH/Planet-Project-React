import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePlanet } from '../redux/planetsSlice';
import PlanetCanvas from './Planet';

const PlanetTable = () => {
  const planets = useSelector((state) => state.planets); // Planeten aus dem Redux-Store abrufen
  const dispatch = useDispatch();

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

  const handleDeletePlanet = (name) => {
    dispatch(removePlanet(name)); // Planet aus dem Redux-Store entfernen
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Klima</th>
          <th>Terrain</th>
          <th>Population</th>
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
            <td>{planet.climate || 'Unbekannt'}</td>
            <td>{planet.terrain || 'Unbekannt'}</td>
            <td>{planet.population || 'Unbekannt'}</td>
            <td>
              <button
                className="delete-button"
                onClick={() => handleDeletePlanet(planet.name)}
              >
                Löschen
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlanetTable;