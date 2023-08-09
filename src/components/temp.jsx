import { useState } from 'react';
const correctEmail = 'James@bond.com';
const correctPass = 'secret123';

export default function Login() {
    const [emailVal, setEmailVal] = useState('');
    const [passVal, setPassVal] = useState('');
    const [formSuccess, setFormSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')

    function emailInput(event) {
        setEmailVal(event.target.value);
    }
    function paswInput(event) {
        setPassVal(event.target.value);
    }

    function handleSubmit(event) {
        setErrorMsg('')
        event.preventDefault();
        console.log('submit');
        if (emailVal.trim() === '' || passVal.trim() === '') {
            console.log('Abu laukai privalomi');
            return;
        }
        if (emailVal.toLocaleLowerCase() !== correctEmail.toLocaleLowerCase() ||
            passVal.toLocaleLowerCase() !== correctPass.toLocaleLowerCase()) {
            console.log('wrong email or password');
            setErrorMsg('wrong email or password');
            return;
        }
        console.log('---Sekme---');
        setFormSuccess(true);
    }
    console.log('formSuccess ===', formSuccess);
    return (
        <div>
            {errorMsg.length > 0 && <h2 className='errorMsg'>{errorMsg}</h2>}
            {
                !formSuccess && (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <input
                                onChange={emailInput}
                                value={emailVal}
                                type='text'
                                name='email'
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                onChange={paswInput}
                                value={passVal}
                                type='password'
                                name='password'
                            />
                        </div>
                        <button type='submit'>Login</button>
                    </form>
                )
            }
            {
                formSuccess && (
                    <div className='success'>
                        <h2>You have logged in succesfuly</h2>
                        <p>Welcome back to the website</p>
                    </div>
                )
            }
            <hr />
        </div >
    );
}