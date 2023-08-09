import { useState } from "react"

function InputBlock() {
    const [inputVal, setInputVal] = useState('')
    const [showText, setShowText] = useState(false)

    function enterInput(event) {
        console.log('change', event.target.value);
        const inputEl = event.target;
        const valInInput = inputEl.value;
        setInputVal(valInInput)
    }

    function makeClick() {
        setInputVal('')
    }



    return (
        <div className="container">
            <label htmlFor="input">Input</label>
            <input
                onChange={enterInput}
                value={inputVal}
                id='input'
                type="text"
                placeholder="enter here" />
            <button onClick={makeClick}>Show Output</button>
            {showText && <h2>I input buvo ivesta: {inputVal}</h2>}
        </div>
    )
}

export default InputBlock