import React from 'react'
import { UserContext } from './contexts'


export default function UserProvider({ children }) {
    const sessionUser = sessionStorage.getItem('user')

    const user = JSON.parse(sessionUser)
    const userInfo = {
        user,
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    )
}
