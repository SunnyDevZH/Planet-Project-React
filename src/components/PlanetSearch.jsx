import React, { useState } from 'react';

const PlanetSearch = ({ onAddPlanet }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Funktion, um Planeten aus der API zu suchen
  const handleSearch = async (term) => {
    setSearchTerm(term);
    if (term.length > 0) {
      setIsLoading(true);
      const response = await fetch(`https://swapi.dev/api/planets/?search=${term}`);
      const data = await response.json();
      setSearchResults(data.results);
      setIsLoading(false);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <h2>Die Galaxie durchsuchen</h2>
      <input
        type="text"
        placeholder="Planeten suchen..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {isLoading ? (
        <p>Die Galaxie wird durchsucht...</p>
      ) : (
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
            {searchResults.map((planet) => (
              <tr key={planet.name}>
                <td>{planet.name}</td>
                <td>{planet.climate}</td>
                <td>{planet.terrain}</td>
                <td>{planet.population}</td>
                <td>
                  <button onClick={() => onAddPlanet(planet)}>Hinzufügen</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PlanetSearch;