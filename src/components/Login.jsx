// create component
// import App.jsx
// form
// 2 inputs - email & password
// submit btn
// email state (onChange value)
// password state

import { useState } from "react";

function Login() {
    const [emailVal, setEmailVal] = useState('')
    const [passwordVal, setPasswordVal] = useState('')

    function getEmail(event) {
        setEmailVal(event.target.value);
    }
    function getPsw(event) {
        setPasswordVal(event.target.value);
    }

    return (
        <div>
            <form className="container">
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={getEmail}
                        value={emailVal}
                        type="text"
                        name="email"
                        id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={getPsw}
                        value={passwordVal}
                        type="password"
                        name="password"
                        id="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
            <h3>Email: {emailVal}</h3>
            <h3>Password: {passwordVal}</h3>
        </div>
    )
}

export default Login;