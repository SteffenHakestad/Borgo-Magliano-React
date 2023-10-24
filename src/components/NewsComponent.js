import React from 'react';
import Linkify from 'react-linkify';

export default function NewsComponent({ NewsTitle, NewsDescription }) {
    return (
        <div className="news-container">
            <div className="news-title-background">
                <h1>
                    <Linkify>{NewsTitle}</Linkify>
                </h1>
            </div>
            <p>
                <Linkify>{NewsDescription}</Linkify>
            </p>
        </div>
    );
}
