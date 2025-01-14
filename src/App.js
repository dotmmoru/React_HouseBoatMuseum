import React from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">Houseboat Museum</h1>
        <p className="app-subtitle">Explore our unique floating museum</p>
      </header>

      {/* Navigation */}
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="https://houseboatmuseum.nl" target="_blank" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="https://houseboatmuseum.nl/the-museum" target="_blank" rel="noopener noreferrer">
              The Museum
            </a>
          </li>
          <li className="nav-item">
            <a href="https://houseboatmuseum.nl/links" target="_blank" rel="noopener noreferrer">
              Links
            </a>
          </li>
          <li className="nav-item">
            <a href="https://houseboatmuseum.nl/contact" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main>
        <Gallery />
      </main>
    </div>
  );
}

export default App;
