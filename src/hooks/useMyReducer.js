import { useState } from "react"


export function useMyReducer(reducer, initState) {
    const [state, setState] = useState(initState)

    function dispatch(action) {
        const newState = reducer(state, action)
        setState(newState)
    }

    return [state, dispatch]
}