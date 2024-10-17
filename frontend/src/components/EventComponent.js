import Linkify from "react-linkify";

export default function EventComponent({
	eventHeadline,
	eventText,
	EventImagePath,
}) {
	return (
		<>
			<div className="event-container">
				<img src={`${EventImagePath}`} alt="Event" />
				<div className="event-divider"></div>
				<h1>{eventHeadline}</h1>
				<Linkify>
					<p>{eventText}</p>
				</Linkify>
			</div>
		</>
	);
}
