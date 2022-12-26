import React, { useEffect } from 'react';

export default function Hooks() {
    const [count, setCount] = React.useState(0)
    const [date, setDate] = React.useState(new Date())

    const tick = () => {
        setDate(new Date())
        console.log("clock ticking")
    }

    useEffect(() => {
        console.log("Counter")
        document.title = `Counted ${count} Times`
    }, [count,])

    useEffect(() => {
        console.log("Timer")
        const interval = setInterval(tick, 1000)

        return () => clearInterval(interval)
    }, [])

    // const addCount = () => {
    //     setCount((prevCount) => prevCount + 1)
    // }

    return (
        <div>
            Time: {date.toLocaleTimeString()}
            {/* <button onClick={addCount}>
                Count Me
            </button> */}
        </div>
    )
}
