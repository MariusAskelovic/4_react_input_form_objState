import { useState } from "react"

const initTodos = [
    { id: 1, title: 'Do pushups', isDone: false },
    { id: 2, title: 'Buy Milk', isDone: true },
    { id: 3, title: 'Fly a kite', isDone: false },
    { id: 4, title: 'Go to park', isDone: false },
]

/*
jei idToDelete === 3
tai su setMainTodoArr funkcija turim grazinti masyva kuris atrodo be elemento
    { id: 3, title: 'Fly a kite', isDone: false },
Labai svarbu!!! Nemodifikuoti mainTodoArr
*/

const liStyle = {
    display: 'flex',
    width: '240px',
    justifyContent: 'space-between',
    alignItems: 'center',
}

function Todo() {
    const [mainTodoArr, setMainTodoArr] = useState(initTodos)
    const [inputVal, setInputVal] = useState('')

    function handleDelete(idToDelete) {
        // console.log('lets delete', idToDelete);
        // filter grazina nauja masyva nemodifikuojant originalo
        const filtered = mainTodoArr.filter((tObj) => tObj.id !== idToDelete)
        setMainTodoArr(filtered)
        // setMainTodoArr((prevTodoArr) => { prevTodoArr.filter((tObj) => tObj.id !== idToDelete) })
        // console.table(filtered);
    }
    function addTodo() {
        const newObj = {
            id: Math.floor((Math.random() * 10000) + 1),
            title: inputVal,
            isDone: false,
        }
        setMainTodoArr([...mainTodoArr, newObj]);
    }
    function getInputVal(event) {
        setInputVal(event.target.value);
    }

    // function done(isDoneId) {
    //     setMainTodoArr(mainTodoArr.map((tObj) => {
    //         if (tObj.id === isDoneId) {
    //             if (tObj.isDone === true) {

    //             }
    //         }
    //     }))
    // }
    const mainArrayEmpty = mainTodoArr.length === 0;

    return (
        <div>
            <h2>Todo list</h2>
            <fieldset>
                <legend>Add Todo</legend>
                <input
                    type="text"
                    placeholder="new todo"
                    onChange={getInputVal}
                />
                <button onClick={addTodo}>Add</button>
            </fieldset>
            {mainArrayEmpty && <h2>Nera nei vieno todo, pridekite nauja</h2>}
            <ul>
                {mainTodoArr.map((tObj) =>
                (
                    // <li key={tObj.id} style={liStyle} className={tObj.isDone ? "todoDone" : ""}>
                    <li key={tObj.id} style={liStyle}>
                        <span>{tObj.title}</span>
                        <button onClick={() => handleDelete(tObj.id)}>Delete</button>
                        {/* <button onClick={() => done(tObj.id)}>Done</button> */}
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default Todo