export default function LoginComponent({}) {
    return <>
            <div id="login-container">
                <h3>Logg inn</h3>
                <form action="" method="post">
                    <div className="email-form">
                        <label htmlFor="email-input">E-post</label>
                        <br></br>
                        <input type="email" name="email-input" id="email-input" placeholder="Eksempel@gmail.com"></input>
                    </div>
                    <br></br>
                    <div className="password-form">
                        <label htmlFor="password-input">Passord</label>
                        <br></br>
                        <input type="password" name="password-input" id="password-input" placeholder="Passord" ></input>
                    </div>
                    <input className="submit-button" type="submit" value="Logg inn"></input>
                </form>
            </div>
        </>
}
