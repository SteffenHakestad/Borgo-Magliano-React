import { useTranslation } from 'react-i18next';

export default function RegisterComponent() {
    const { t } = useTranslation();


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
            <h3>{t("become-member")}</h3>
            <form onSubmit={submitRegister} action="" method="post">
                <div className="name-form">
                    <label htmlFor="full-name-input">{t("full-name")}</label>
                    <br></br>
                    <input type="text" name="full-name-input" id="full-name-input" placeholder={t("example-full-name")} required></input>
                </div>
                <div className="email-form">
                    <label htmlFor="email-input">{t("email")}</label>
                    <br></br>
                    <input type="email" name="email-input" id="email-input" placeholder={t("example-email")} required></input>
                </div>
                <br></br>
                <div className="password-form">
                    <label htmlFor="password-input">{t("password")}</label>
                    <br></br>
                    <input type="password" name="password-input" id="password-input" placeholder={t("password")} required></input>
                </div>
                <div className="password-form">
                    <label htmlFor="repeat-password-input">{t("confirm-password")}</label>
                    <br></br>
                    <input type="password" name="repeat-password-input" id="repeat-password-input" placeholder={t("confirm-password")} required></input>
                </div>
                <input className="submit-button" type="submit" value={t("become-member")}></input>
            </form>
        </div>
        </>
}
