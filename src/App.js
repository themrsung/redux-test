import logo from "./logo.svg"
import "./App.css"
import store from "./redux/config/configStore"
import { useState } from "react"

function App() {
    const plusOneHandler = () => {
        console.log("+1 clicked")
        store.dispatch({ type: "CounterIncremented" })
    }

    const minusOneHandler = () => {
        console.log("-1 clicked")
        store.dispatch({ type: "CounterDecremented" })
    }

    const timesTwoHandler = () => {
        console.log("x2 clicked")
        store.dispatch({ type: "CounterDoubled" })
    }

    const halfHandler = () => {
        console.log("/2 clicked")
        store.dispatch({ type: "CounterHalved" })
    }

    const powerHandler = () => {
        console.log("^2 clicked")
        store.dispatch({ type: "CounterPowered" })
    }

    const logHandler = () => {
        console.log("sqrt clicked")
        store.dispatch({ type: "CounterLogged" })
    }

    const [number, setNumber] = useState(0)
    store.subscribe(() => {
        setNumber(store.getState().value)
    })

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div className="buttondiv">
                    <h1>{number}</h1>
                    <button onClick={plusOneHandler}>+1</button>
                    <button onClick={minusOneHandler}>-1</button>
                    <button onClick={timesTwoHandler}>x2</button>
                    <button onClick={halfHandler}>/2</button>
                    <button onClick={powerHandler}>^2</button>
                    <button onClick={logHandler}>sqrt</button>
                </div>
            </header>
        </div>
    )
}

export default App
