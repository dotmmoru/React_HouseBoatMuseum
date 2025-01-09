import React from 'react';
import PhotoGallery from './Gallery';  // Імпортуємо новий компонент

function App() {
  return (
    <div className="App">
      <h1>Фотогалерея</h1>
      <PhotoGallery />  {/* Вставляємо компонент у ваше основне вікно */}
    </div>
  );
}

export default App;
