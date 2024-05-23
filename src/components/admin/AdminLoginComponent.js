import React from 'react';

export default function AdminLoginComponent() {
    return (
        <div id="admin-container">
            <h1>Administrator Login</h1>
            <div className='admin-divider'></div>
            <div id="admin-login-container">
                <form>
                <div className='label-container admin-inner-container'>
                    <label className="login-label" htmlFor="username">Admin Brukernavn:</label>
                    <label className="login-label" htmlFor="password">Admin Passord: </label>
                </div>
                <div className='input-container admin-inner-container'>
                    <input className="login-input" type="text" id="username" name="username" placeholder='Brukernavn'/>
                    <input className="login-input" type="password" id="password" name="password" placeholder='Passord'/>
                </div>
                </form>

            </div>
            <button className='login-btn std-btn' type="submit">Logg inn</button>

        </div>

    );
}


