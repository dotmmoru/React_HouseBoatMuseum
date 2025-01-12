import React from 'react';

function ShareButtons({ shareUrl, text }) {
    // URL для Facebook
    const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    // URL для Twitter
    const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`;
    // URL для LinkedIn
    const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

    // Функція для Web Share API (на мобільних)
    const handleNativeShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Shared from Houseboat Museum',
                text: text,
                url: shareUrl
            }).catch((err) => console.error('Error sharing:', err));
        } else {
            // fallback: відкриваємо просто URL у новій вкладці
            window.open(shareUrl, '_blank');
        }
    };

    // Функція для завантаження (download)
    const handleDownload = () => {
        // 1. Створюємо тимчасове <a> посилання
        const link = document.createElement('a');
        link.href = shareUrl;

        // 2. Прописуємо download-атрибут (назву файлу можна змінити)
        link.download = 'houseboat-photo.jpg';

        // 3. Додаємо лінк до документа і «клікаємо»
        document.body.appendChild(link);
        link.click();

        // 4. Видаляємо лінк
        document.body.removeChild(link);
    };

    return (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {/* Кнопка для Web Share API (мобільні) */}
            <button onClick={handleNativeShare}>
                Поділитися (Web Share)
            </button>

            {/* Посилання для Facebook */}
            <a
                href={facebookShare}
                target="_blank"
                rel="noopener noreferrer"
            >
                Share to Facebook
            </a>

            {/* Посилання для Twitter */}
            <a
                href={twitterShare}
                target="_blank"
                rel="noopener noreferrer"
            >
                Share to Twitter
            </a>

            {/* Посилання для LinkedIn */}
            <a
                href={linkedInShare}
                target="_blank"
                rel="noopener noreferrer"
            >
                Share to LinkedIn
            </a>

            {/* НОВА КНОПКА: ЗАВАНТАЖИТИ ФОТО */}
            <button onClick={handleDownload}>
                Завантажити
            </button>
        </div>
    );
}

export default ShareButtons;
