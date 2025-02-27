import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import CONFIG from '../config';

function Gallery() {
    const [photos, setPhotos] = useState([]);
    const [openLightbox, setOpenLightbox] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    useEffect(() => {
        fetch(`${CONFIG.API_BASE_URL}/photos`)
            .then((response) => response.json())
            .then((data) => setPhotos(data.photos))
            .catch((error) => console.error('Error fetching photos:', error));
    }, []);

    const handleImageClick = (index) => {
        setPhotoIndex(index);
        setOpenLightbox(true);
    };

    const downloadImage = async (url) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob(); // Отримуємо файл у форматі Blob
            const objectURL = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = objectURL;
            link.download = `photo-${photoIndex + 1}.jpg`; // Ім'я файлу
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(objectURL); // Очищення пам'яті
        } catch (error) {
            console.error('Error downloading the image:', error);
        }
    };


    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Photo Gallery</h2>
            {photos.length === 0 && <p className="no-photos-message">No photos available to display</p>}
            <div className="gallery">
                {photos.length > 0 && photos.map((photo, index) => (
                    <div className="photo-item" key={index} onClick={() => handleImageClick(index)}>
                        <img
                            src={`${CONFIG.API_BASE_URL}${photo}`}
                            alt={`Photo ${index + 1}`}
                            className="photo-image"
                        />
                    </div>
                ))}
            </div>

            {openLightbox && (
                <>
                    <Lightbox
                        images={photos.map((path) => `${CONFIG.API_BASE_URL}${path}`)}
                        startIndex={photoIndex}
                        onClose={() => setOpenLightbox(false)}
                    />
                    <button
                        className="download-btn"
                        onClick={() => downloadImage(`${CONFIG.API_BASE_URL}${photos[photoIndex]}`)}
                    >
                        Download
                    </button>
                </>
            )}
        </div>
    );
}

export default Gallery;
