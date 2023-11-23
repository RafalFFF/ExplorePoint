import React from "react";
import './forms.scss';

const RegisterForm = ()=>{
    return(
        <form action="" className="form register-form">
            <div className="form__row">
                <label htmlFor="name">
                    nazwisko
                </label>
                    <input type="text" id="name" name="name" />
            </div>
            <div className="form__row">
                <label htmlFor="passwrod">
                    hasło
                </label>
                <input type="password" id="passwrod" name="password" />
            </div>
            <div className="form__row">
                <label htmlFor="email">
                    email
                </label>
                    <input type="email" id="email" name="email" />
            </div>
            <div className="form__row">
                <button type="submit">
                    Zarejestruj się
                </button>
            </div>
        </form>
    )
}

export default RegisterForm