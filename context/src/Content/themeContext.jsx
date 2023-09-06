import React, { createContext, useCallback, useContext, useState } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'
const ThemeContext = createContext(null)

function ThemeContextProvider({children}) {
    const [value, changetheme] = useLocalStorage('theme', false)
    
    const ContextValue = {
        value,
        changetheme
    }

    return (<ThemeContext.Provider value={ContextValue}>
        {children}
    </ThemeContext.Provider>)
 
}

export const useThemeContext = () => {
    const contextValue = useContext(ThemeContext)
    if(!contextValue) throw new Error("wrong")

    return contextValue
}

export default ThemeContextProvider