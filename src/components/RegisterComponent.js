export default function RegisterComponent() {

    function submitRegister(event) {
        event.preventDefault(); // Prevents the default form submission behavior
        const fullNameValue = document.getElementById("full-name-input").value;
        const emailValue = document.getElementById("email-input").value;
        const passwordValue = document.getElementById("password-input").value;
        const repeatPasswordValue = document.getElementById("repeat-password-input").value;


        if (passwordValue !== repeatPasswordValue) {
            alert("Passordene er ikke like");
        } else {
            //This is where you connect to the backend endpoint
            console.log("Firstname:", fullNameValue);
            console.log("Email:", emailValue);
            console.log("Password:", passwordValue);
            console.log("Repeat password:", repeatPasswordValue);
        }
        
    }

    return <>
        <div id="register-container">
            <h3>Bli medlem</h3>
            <form onSubmit={submitRegister} action="" method="post">
                <div className="name-form">
                    <label htmlFor="full-name-input">Fullt navn</label>
                    <br></br>
                    <input type="text" name="full-name-input" id="full-name-input" placeholder="Ola Nordmann" required></input>
                </div>
                <div className="email-form">
                    <label htmlFor="email-input">E-post</label>
                    <br></br>
                    <input type="email" name="email-input" id="email-input" placeholder="Eksempel@gmail.com" required></input>
                </div>
                <br></br>
                <div className="password-form">
                    <label htmlFor="password-input">Passord</label>
                    <br></br>
                    <input type="password" name="password-input" id="password-input" placeholder="Passord" required></input>
                </div>
                <div className="password-form">
                    <label htmlFor="repeat-password-input">Gjenta passord</label>
                    <br></br>
                    <input type="password" name="repeat-password-input" id="repeat-password-input" placeholder="Gjenta passord" required></input>
                </div>
                <input className="submit-button" type="submit" value="Bli medlem"></input>
            </form>
        </div>
        </>
}
