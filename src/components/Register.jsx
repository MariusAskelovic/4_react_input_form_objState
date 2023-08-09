import { useState } from "react"

const adminEmail = 'james@bond.com';
const adminPsw = 'bubbleGUM';

export default function Register() {
    const [emailVal, setEmailVal] = useState('')
    const [passwVal, setPasswVal] = useState('')
    const [passwValRepeat, setPasswValRepeat] = useState('')
    const [loginStatus, setLoginStatus] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')


    function handleEmailInput(event) {
        setEmailVal(event.target.value)
    }
    function handlePasswordInput(event) {
        setPasswVal(event.target.value)
    }
    function handlePasswordRepeatInput(event) {
        setPasswValRepeat(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setErrorMsg('')
        if (emailVal.trim() === '' || passwVal.trim() === '') {
            setErrorMsg('fill all inputs')
            return;
        }
        if (passwVal !== passwValRepeat) {
            setErrorMsg('passwords must match')
            return;
        }
        if (emailVal !== adminEmail || passwVal !== adminPsw) {
            setErrorMsg('wrong email or password');
            return;
        }
        setLoginStatus(true)
    }

    return (
        <div className="container">
            {!loginStatus && <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={emailVal}
                        onChange={handleEmailInput}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={passwVal}
                        onChange={handlePasswordInput}
                    />
                </div>
                <div>
                    <label htmlFor="passwordRepeat">Repeat Password: </label>
                    <input
                        type="password"
                        name="password"
                        id="passwordRepeat"
                        value={passwValRepeat}
                        onChange={handlePasswordRepeatInput}
                    />
                </div>
                <br></br>
                <button type="submit">Click ME</button>
            </form>}
            {!loginStatus && <h1>{errorMsg}</h1>}
            {loginStatus && <h2>Welcome back {emailVal}</h2>}
        </div>

    )
}