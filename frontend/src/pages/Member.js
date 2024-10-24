import React from "react";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import HeaderComponent from "../components/HeaderComponent";

export default function Member() {
	return (
		<div>
			<HeaderComponent HeaderName={"login-register"} />

			<div id="login-register-container">
				<LoginComponent />
				<RegisterComponent />
			</div>
		</div>
	);
}
