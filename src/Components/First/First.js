import { useState } from "react";

export const First = (props) => {
    const { message } = props;
    const [isClicked, setIsClicked] = useState(false)
    const obj = {
        input: ""
    }
    function handleClick(e) {
        e.preventDefault()
        setIsClicked(!isClicked)
    }
    function handleOnChange(e) {
        obj.input = e.target.value
    }
    return (
        <div>
            My first component
            {
                isClicked && message
            }
            <br />

            <form>
                <input type="text" onChange={handleOnChange} />
                <textarea />
                <input type="submit" value={"Submit Me"} />
                {/* <button onClick={handleClick}>
                    Click Me
                </button> */}
            </form>

        </div>
    )
}
