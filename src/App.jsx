import Counter from "./components/Counter";
import InputBlock from "./components/InputBlock";
import Login from "./components/Login";
import PassBlock from "./components/PassBlock";
import Register from "./components/Register";
import Todo from "./components/Todo";
import './style/App.css'

export default function App() {
  return <div>
    {false && <InputBlock />}
    {false && <Login />}
    {true && <Todo />}
    {false && <PassBlock />}
    {false && <Register />}
    {false && <Counter />}
  </div>
}