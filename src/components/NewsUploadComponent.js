import React, { useState } from 'react';

export default function NewsUploadComponent({ onClose, onSubmit }) {
    const [headline, setHeadline] = useState('');
    const [newsText, setNewsText] = useState('');

    const handleSubmit = () => {
        // Pass the values to the parent component via the onSubmit function
        onSubmit(headline, newsText);
        // Close the popup after submission
        onClose();
    };

    return (
        <div className="news-popup">
            <div className="news-popup-content">
                <label htmlFor="news-headline">Overskrift</label>
                <input
                    type="text"
                    name='news-headline'
                    id="news-headline"
                    placeholder="Overskrift"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                />
                <label htmlFor="news-text">Nyhetstekst</label>
                <textarea
                    type="text"
                    name='news-text'
                    id="news-text"
                    placeholder="Nyhetstekst"
                    value={newsText}
                    onChange={(e) => setNewsText(e.target.value)}
                />
                <div className='news-popup-btn-container'>
                    <button className="news-popup-btn" onClick={onClose}>Avbryt</button>
                    <button className="news-popup-btn" onClick={handleSubmit}>Publiser</button>

                </div>

            </div>
        </div>
    );
}
