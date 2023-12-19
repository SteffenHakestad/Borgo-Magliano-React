import LoginComponent from "../components/LoginComponent"
import RegisterComponent from "../components/RegisterComponent"

export default function Member() {
    return (
        <div>
            <div className="header long-header">Logg inn / Registrer bruker</div>
            <div id="login-register-container">
                <LoginComponent/>
                <RegisterComponent/>
            </div>
        </div>
    )
}
