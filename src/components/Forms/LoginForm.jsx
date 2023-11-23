import React from "react";
import './forms.scss';

const LoginForm = ()=>{
    return(
        <form action="" className="form login-form">
            <div className="form__row">
                <label htmlFor="name">
                </label>
                    <input type="text" id="name" name="name" />
            </div>
            <div className="form__row">
                <label htmlFor="password">
                </label>
                    <input type="password" id="password" name="password" />
            </div>
            <button type="submit">
                Zaloguj się
            </button>
        </form>
    )
}

export default LoginForm