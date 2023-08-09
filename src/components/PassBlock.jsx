import { useState } from "react"

export default function PassBlock() {
    const [passwVal, setPasswVal] = useState('')
    function handlePsw(event) {
        setPasswVal('');
        const password = event.target.value;
        setPasswVal(password);
    }
    return (
        <div className="container">
            <div>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handlePsw}
                />
            </div>
            <h2>{passwVal}</h2>
        </div>
    )
}