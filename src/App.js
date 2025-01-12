import React from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Houseboat Museum</h1>
        <p className="app-subtitle">Explore our unique floating gallery</p>
      </header>
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#gallery">Gallery</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main>
        <Gallery />
      </main>
    </div>
  );
}

export default App;
