import InputBlock from "./components/InputBlock";
import Login from "./components/Login";
import './style/App.css'

export default function App() {
  return <div>
    <h1>Im new App</h1>
    {false && <InputBlock />}
    <Login />
  </div>
}