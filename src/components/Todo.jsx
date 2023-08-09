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

function Todo() {
    const [mainTodoArr, setMainTodoArr] = useState(initTodos)

    function handleDelete(idToDelete) {
        console.log('lets delete', idToDelete);
        // filter grazina nauja masyva nemodifikuojant originalo
        const filtered = mainTodoArr.filter((tObj) => tObj.id !== idToDelete)
        // console.table(filtered);
        setMainTodoArr(filtered)
        // console.table(initTodos);
    }


    return (
        <div>
            <h2>Todo list</h2>
            <fieldset>
                <legend>Add Todo</legend>
                <input type="text" placeholder="new todo" />
                <button>Add</button>
            </fieldset>
            <ul>
                {mainTodoArr.map((tObj) =>
                (
                    <li key={tObj.id}>
                        <span>{tObj.title}</span>
                        <button onClick={() => handleDelete(tObj.id)}>Delete</button></li>
                )
                )}
            </ul>
        </div>
    )
}

export default Todo