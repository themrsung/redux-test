import { createStore } from "@reduxjs/toolkit"

function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case "CounterIncremented":
            return { value: state.value + 1 }
        case "CounterDecremented":
            return { value: state.value - 1 }
        default:
            return state
    }
}

let store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState().value)
})

export default store
