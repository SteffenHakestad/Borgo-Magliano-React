import ChatComponent from "../components/ChatComponent";
import HeaderComponent from "../components/HeaderComponent";

export default function Chat() {
	return (
		<>
			<HeaderComponent HeaderName={"chat"} />

			<ChatComponent />
		</>
	);
}
