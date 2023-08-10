import { useState, useEffect } from 'react';

export default function Counter() {
    const [value, setValue] = useState(0);

    // useEffect(() => {}, []) - pasileis tik viena karta po komponento sugeneravimo
    // () => {} - kas vyks
    // [] => priklausomybiu masyvas

    useEffect(() => {
        console.log(
            'turetu buti veiksmai kurie turi pasileisti pirma karta \n tik susikurus kompnentui'
        );
        plus2();
    }, []);

    console.log('susikure');

    function plus2() {
        // setValue(value + 2);
        setTimeout(() => {
            // setValue(value + 5);
            setValue((prevValue) => prevValue + 5);
        }, 5000);
    }
    // negalima komponento viduje kviesti state keiciancios
    // funkcijos nes bus infinite loop
    // plus2();

    function plusValue() {
        // setValue(value + 1);
        // kai reiksme priklauso nuo pries tai buvusios
        // atnaujinti reiktu su funkcija
        setValue((prevValue) => prevValue + 1);
        // setValue((prevValue) => prevValue + 1);
        // setValue((prevValue) => prevValue + 1);
        // setValue((prevValue) => prevValue + 1);
    }

    return (
        <div>
            <h2>Label</h2>
            <p>{value}</p>
            <button onClick={plusValue}>UP</button>
        </div>
    );
}