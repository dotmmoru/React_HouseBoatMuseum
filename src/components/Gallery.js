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

    const downloadImage = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = `photo-${photoIndex + 1}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Photo Gallery</h2>
            <div className="gallery">
                {photos.length > 0 ? (
                    photos.map((photo, index) => (
                        <div className="photo-item" key={index} onClick={() => handleImageClick(index)}>
                            <img
                                src={`${CONFIG.API_BASE_URL}${photo}`}
                                alt={`Photo ${index + 1}`}
                                className="photo-image"
                            />
                        </div>
                    ))
                ) : (
                    <p className="no-photos-message">No photos available to display</p>
                )}
            </div>

            {openLightbox && (
                <>
                    <Lightbox
                        images={photos.map((path) => `${CONFIG.API_BASE_URL}${path}`)}
                        startIndex={photoIndex}
                        onClose={() => setOpenLightbox(false)}
                    />
                    {/* Відображення кнопки зверху */}
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
