import { useTranslation } from 'react-i18next';

export default function LoginComponent() {
    const { t } = useTranslation();
    
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
            <h3>{t("login")}</h3>
            <form onSubmit={submitLogin} action="" method="post">
                <div className="email-form">
                    <label htmlFor="li-email-input">{t("email")}</label>
                    <br></br>
                    <input type="email" name="li-email-input" id="li-email-input" placeholder={t("example-email")}></input>
                </div>
                <br></br>
                <div className="password-form">
                    <label htmlFor="li-password-input">{t("password")}</label>
                    <br></br>
                    <input type="password" name="li-password-input" id="li-password-input" placeholder={t("password")} ></input>
                </div>
                <input className="submit-button" type="submit" value={t("login")}></input>
            </form>
        </div>
    );
}
