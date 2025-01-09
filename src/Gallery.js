import React, { useEffect, useState } from 'react';

function Gallery() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        // Отримуємо список фотографій від сервера
        fetch('http://localhost:3001/photos')
            .then((response) => response.json())
            .then((data) => setPhotos(data.photos))
            .catch((error) => console.error('Error fetching photos:', error));
    }, []);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {photos.length > 0 ? (
                photos.map((photo, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                        {/* Виводимо фото */}
                        <img
                            src={`http://localhost:3001${photo}`} // Додаємо базовий URL
                            alt={`Photo ${index}`}
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                    </div>
                ))
            ) : (
                <p>Немає фотографій для відображення</p>
            )}
        </div>
    );
}

export default Gallery;
