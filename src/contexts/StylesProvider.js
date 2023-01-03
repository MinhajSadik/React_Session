import React from 'react'
import { StylesContext } from './Contexts'

export default function StylesProvider({ children }) {
    const styles = {
        color: "red",
        fontSize: "42px",
        backgroundColor: "hotpink",
    }

    return (
        <StylesContext.Provider value={styles}>
            {children}
        </StylesContext.Provider>
    )
}
