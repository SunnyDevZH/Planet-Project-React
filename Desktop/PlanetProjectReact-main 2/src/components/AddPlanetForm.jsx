import React, { useState } from 'react';

const AddPlanetForm = ({ addPlanet }) => {
  const [name, setName] = useState('');
  const [diameter, setDiameter] = useState('');
  const [gravity, setGravity] = useState('');
  const [terrain, setTerrain] = useState('');
  const [population, setPopulation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlanet({ name, diameter, gravity, terrain, population });
    setName('');
    setDiameter('');
    setGravity('');
    setTerrain('');
    setPopulation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Durchmesser (km)"
        value={diameter}
        onChange={(e) => setDiameter(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Gravitation"
        value={gravity}
        onChange={(e) => setGravity(e.target.value)}
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
        placeholder="Bevölkerung"
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
        required
      />
      <button type="submit">Planet hinzufügen</button>
    </form>
  );
};

export default AddPlanetForm;