export default function Member() {
    return (
        <div>
            <div className="header">Logg inn / Registrer bruker</div>
            <div id="login-register-container">
                <div id="login-container">
                    <h3>Logg inn</h3>
                    <form action="" method="post">
                        <div className="email-form">
                            <label htmlFor="email-input">E-post</label>
                            <br></br>
                            <input type="email" name="email-input" id="email-input" placeholder="Eksempel@gmail.com" ></input>
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
                <div id="register-container">
                    <h3>Bli medlem</h3>
                    <form action="" method="post">
                        <div className="name-form">
                            <label htmlFor="firstname-input">Navn</label>
                            <br></br>
                            <input type="text" name="firstname-input" id="firstname-input" placeholder="Ola" ></input>
                        </div>
                        <div className="name-form">
                            <label htmlFor="lastname-input">Etternavn</label>
                            <br></br>
                            <input type="text" name="lastname-input" id="lastname-input" placeholder="Nordmann" ></input>
                        </div>
                        <div className="email-form">
                            <label htmlFor="email-input">E-post</label>
                            <br></br>
                            <input type="email" name="email-input" id="email-input" placeholder="Eksempel@gmail.com" noValidate></input>
                        </div>
                        <br></br>
                        <div className="password-form">
                            <label htmlFor="password-input">Passord</label>
                            <br></br>
                            <input type="password" name="password-input" id="password-input" placeholder="Passord" ></input>
                        </div>
                        <div className="password-form">
                            <label htmlFor="repeat-password-input">Gjenta passord</label>
                            <br></br>
                            <input type="password" name="repeat-password-input" id="repeat-password-input" placeholder="Gjenta passord" ></input>
                        </div>
                        <input className="submit-button" type="submit" value="Bli medlem"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
