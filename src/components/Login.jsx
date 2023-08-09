import { useState } from 'react';

const correctEmail = 'James@bond.com';
const correctPass = 'secret123';

export default function Login() {
    const [emailVal, setEmailVal] = useState('');
    const [passVal, setPassVal] = useState('');
    const [formSuccess, setFormSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')

    /**
     * @param {InputEvent} event
     */
    function emailInput(event) {
        setEmailVal(event.target.value);
    }
    function paswInput(event) {
        setPassVal(event.target.value);
    }
    /**
     * @param {SubmitEvent} event
     */
    function handleSubmit(event) {
        setErrorMsg('')
        // sustabdom puslapi nuo perkrovimo
        event.preventDefault();
        console.log('submit');
        // daryti ka reikia
        // atspausdinti ivestas reikmes:
        // console.log('ivesta email:', emailVal);
        // console.log('ivesta password:', passwVal);
        // validuoti ar ne tusti laukai
        if (emailVal.trim() === '' || passVal.trim() === '') {
            console.log('Abu laukai privalomi');
            return;
        }
        // patikrinti ar sutampa email (turetu buti nesvarbu dizioji ar mazoji raides)
        // patikrinti ar sutampa password
        // jei nesutampa tai consolinam klaida
        if (emailVal.toLocaleLowerCase() !== correctEmail.toLocaleLowerCase() ||
            passVal.toLocaleLowerCase() !== correctPass.toLocaleLowerCase()) {
            console.log('wrong email or password');
            setErrorMsg('wrong email or password');
            return;
        }
        // jei nesutampa atvaizduojam klaida <h2 className="errorMsg"></h2>
        // jei viskas gerai - sekmes atvejis
        console.log('---Sekme---');
        setFormSuccess(true);
    }
    console.log('formSuccess ===', formSuccess);
    return (
        <div>
            {/* {errorMsg !== '' && <h2 className='errorMsg'>{errorMsg}</h2>} */}
            {errorMsg.length > 0 && <h2 className='errorMsg'>{errorMsg}</h2>}
            {/* {Boolean(errorMsg.length) && <h2 className='errorMsg'>{errorMsg}</h2>} */}
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
            <h3>Email: {emailVal}</h3>
            <h3>Password: {passVal}</h3>
        </div >
    );
}