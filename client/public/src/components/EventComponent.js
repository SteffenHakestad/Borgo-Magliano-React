export default function EventComponent({EventTitle, EventDescription, EventImagePath}) {
    return <>
            <div className="event-container">
                <img src={process.env.PUBLIC_URL + EventImagePath} alt="Logo" />
                <div className="event-divider"></div>
                <h1>{EventTitle}</h1>
                <p>{EventDescription}</p>
            </div>
        </>
}
