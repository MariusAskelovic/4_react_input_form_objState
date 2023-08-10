import { useState } from "react"

function Counter() {
    const [value, setValue] = useState(0)
    console.log('susikure');

    function plus2() {
        setTimeout(() => {
            setValue(value + 2)
        }, 3000)
    }
    // negalima komponento viduje kviesti
    // state keiciancios funkcijos
    // nes turesim infinite loop

    // plus2()

    function plusValue() {
        setValue(value + 1)
    }

    return (
        <div>
            <h2>Label</h2>
            <p>{value}</p>
            <button onClick={plusValue}>Up</button>
        </div>
    )
}

export default Counter