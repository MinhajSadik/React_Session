import React from 'react';
import { DataContext } from './Contexts';

export default function DataProvider({ children }) {
    const [posts, setPosts] = React.useState([])



    React.useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [])

    return (
        <DataContext.Provider value={posts}>
            {children}
        </DataContext.Provider>
    )
}
