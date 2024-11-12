import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	// Default user to null
	const [user, setUser] = useState(null);

	useEffect(() => {
		// Check if there is a token before making the request
		const token = document.cookie.replace(
			/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
			"$1"
		);

		if (token && !user) {
			// Only fetch profile if token exists and user isn't already set
			axios
				.get("/profile", {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then(({ data }) => {
					// Set user with data from profile if response is successful
					setUser(data);
				})
				.catch((error) => {
					if (error.code === "ECONNABORTED") {
						console.error("Request Timed Out: ", error);
					} else {
						console.error("Error fetching profile:", error);
						// If error occurs, clear user state
						setUser(null); // Reset user to null if unauthorized or error occurs
					}
				});
		}
	}, [user]);

	return (
		// Wrap all children in provider. Wrap the whole app in App.js to keep track of user everywhere
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
