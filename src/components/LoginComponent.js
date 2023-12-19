export default function LoginComponent() {
    
    function submitLogin(event) {
        event.preventDefault(); // Prevents the default form submission behavior
        const LiEmailValue = document.getElementById("li-email-input").value;
        const LiPasswordValue = document.getElementById("li-password-input").value;
        console.log("Email:", LiEmailValue);
        console.log("Password:", LiPasswordValue);
    }
//Using li-prefix on id and name to avoid conflict with the register component
    return (
        <div id="login-container">
            <h3>Logg inn</h3>
            <form onSubmit={submitLogin} action="" method="post">
                <div className="email-form">
                    <label htmlFor="li-email-input">E-post</label>
                    <br></br>
                    <input type="email" name="li-email-input" id="li-email-input" placeholder="Eksempel@gmail.com"></input>
                </div>
                <br></br>
                <div className="password-form">
                    <label htmlFor="li-password-input">Passord</label>
                    <br></br>
                    <input type="password" name="li-password-input" id="li-password-input" placeholder="Passord" ></input>
                </div>
                <input className="submit-button" type="submit" value="Logg inn"></input>
            </form>
        </div>
    );
}
