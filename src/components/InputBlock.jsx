import { useState } from 'react';

export default function InputBlock() {
    const [inputVal, setInputVal] = useState('James Bond');
    const [showText, setShowText] = useState(false);
    function enterInput(event) {
        const inputEl = event.target;
        const valueInInput = inputEl.value;
        setInputVal(valueInInput);
    }

    function makeClick() {
        setShowText(true);
    }

    return (
        <div>
            <label htmlFor='input'>Input</label>
            <input
                onChange={enterInput}
                value={inputVal}
                id='input'
                type='text'
                placeholder='enter here'
            />
            <button onClick={makeClick}>Show Output</button>
            {showText && <h2>I input buvo ivesta: {inputVal}</h2>}
        </div>
    );
}