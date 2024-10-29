import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	//Default user to null
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (!user) {
			axios.get("/profile").then(({ data }) => {
				//Set user with data from profile if true
				setUser(data);
			});
		}
	}, []);
	return (
		//wrap all children in provider. Wrap the whole app in App.js to keep track of user everywhere
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
