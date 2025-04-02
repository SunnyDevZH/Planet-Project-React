import React, { useState } from 'react';
import AddPlanetForm from './components/AddPlanetForm';
import PlanetTable from './components/PlanetTable';
import initialPlanets from './data/planets';
import './styles/App.css';
import PlanetSearch from './components/PlanetSearch.jsx';

const App = () => {
  const [planets, setPlanets] = useState(initialPlanets);

  const addPlanet = (planet) => {
    setPlanets([...planets, planet]);
  };

  const deletePlanet = (name) => {
    setPlanets(planets.filter(planet => planet.name !== name));
  };

  return (
    <div className="App">
      <h1>Auflistung von Planeten</h1>
      <PlanetSearch onAddPlanet={addPlanet} />
      <PlanetTable planets={planets} deletePlanet={deletePlanet} />
      <AddPlanetForm addPlanet={addPlanet} />
    </div>
  );
};

export default App;
