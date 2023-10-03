export default function NewsComponent({NewsTitle, NewsDescription}) {
    return <>
        <div className="news-container">
            <div className="news-title-background">
                <h1>{NewsTitle}</h1>
            </div>
            <p>{NewsDescription}</p>

        </div>
        </>
}

