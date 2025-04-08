import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddPlanetForm from './components/AddPlanetForm';
import PlanetTable from './components/PlanetTable';
import PlanetDetails from './components/PlanetDetails';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Planeten App</h1>
        <nav>
          <Link to="/">Planetenliste</Link> | <Link to="/add">Planet hinzufügen</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PlanetTable />} />
          <Route path="/add" element={<AddPlanetForm />} />
          <Route path="/planet/:name" element={<PlanetDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
