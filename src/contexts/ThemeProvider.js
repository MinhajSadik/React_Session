import React from 'react';
import { ThemeContext } from './contexts';

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState("light")

    const themeInfo = {
        theme: theme,
        setTheme: setTheme,
    }
    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    )
}
