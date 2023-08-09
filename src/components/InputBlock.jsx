// naujas komponentas

// jame turi buti inputas ir mygtukas
// ir tuscias h2 elementas isvedimui

// importuot i App.jsx

function InputBlock() {
    return (
        <form>
            <label htmlFor="input">Input</label>
            <input id='input' type="text" placeholder="enter here" />
            <button>Enter</button>
            <h2></h2>
        </form>
    )
}

export default InputBlock