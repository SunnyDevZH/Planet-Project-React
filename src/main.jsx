import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PlanetSearch from './components/PlanetSearch';
import AddPlanetForm from './components/AddPlanetForm';
import PlanetTable from './components/PlanetTable';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Planeten App</h1>
        <nav className="navigation">
          <Link to="/" className="button-link">Planetenliste</Link>
          <Link to="/add" className="button-link">Planet hinzufügen</Link>
          <Link to="/search" className="button-link">Planeten durchsuchen</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PlanetTable />} />
          <Route path="/add" element={<AddPlanetForm />} />
          <Route path="/search" element={<PlanetSearch />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
