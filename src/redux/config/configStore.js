import { configureStore } from "@reduxjs/toolkit"

function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case "CounterIncremented":
            return { value: state.value + 1 }
        case "CounterDecremented":
            return { value: state.value - 1 }
        case "CounterDoubled":
            return { value: state.value * 2 }
        case "CounterHalved":
            return { value: state.value / 2 }
        case "CounterPowered":
            return { value: Math.pow(state.value, 2) }
        case "CounterLogged":
            return { value: Math.pow(state.value, 0.5) }
        default:
            return state
    }
}

let store = configureStore({
    reducer: counterReducer
})

store.subscribe(() => {
    console.log(store.getState().value)
})

export default store
