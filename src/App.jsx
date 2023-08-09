import InputBlock from "./components/InputBlock";
import Login from "./components/Login";
import Todo from "./components/Todo";
import './style/App.css'

export default function App() {
  return <div>
    <h1>Im new App</h1>
    {false && <InputBlock />}
    {false && <Login />}
    <Todo />
  </div>
}