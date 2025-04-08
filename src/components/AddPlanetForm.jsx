import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlanet } from '../redux/planetsSlice';
import { useNavigate } from 'react-router-dom';

const AddPlanetForm = () => {
  const [name, setName] = useState('');
  const [climate, setClimate] = useState('');
  const [terrain, setTerrain] = useState('');
  const [population, setPopulation] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedPlanet = {
      name: name || 'Unbekannt',
      climate: climate || 'Unbekannt',
      terrain: terrain || 'Unbekannt',
      population: population || 'Unbekannt',
    };
    dispatch(addPlanet(formattedPlanet)); // Planet wird dem Redux-Store hinzugefügt
    navigate('/'); // Zurück zur Planetenliste navigieren
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Neuen Planeten hinzufügen</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Klima"
        value={climate}
        onChange={(e) => setClimate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Terrain"
        value={terrain}
        onChange={(e) => setTerrain(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Population"
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
        required
      />
      <button type="submit">Planet hinzufügen</button>
    </form>
  );
};

export default AddPlanetForm;