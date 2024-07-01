import React from 'react';
import Linkify from 'react-linkify';
//Using linkify to make links in text clickable

export default function NewsComponent({ NewsTitle, NewsDescription }) {
    return (
        <div className="news-container">
            <div className="news-title-background">
                <h1>
                    <Linkify>{NewsTitle}</Linkify>
                </h1>
            </div>
            <div className='news-text-background'>
                <p>
                    <Linkify>{NewsDescription}</Linkify>
                </p>
            </div>

        </div>
    );
}
