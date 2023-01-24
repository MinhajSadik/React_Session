import { useEffect, useState } from "react";


function useAuth(initState) {
    const [loggedInUser, setLoggedInUser] = useState(initState)
    const userCredential = JSON.parse(sessionStorage.getItem("user"));

    useEffect(() => {
        if (userCredential) {
            setLoggedInUser(true)
        }
    }, [userCredential])
    return loggedInUser
}


export default useAuth