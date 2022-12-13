
export const First = ({ allText }) => {

    return (
        <div>
            {
                allText.map((text, index) => (
                    <li key={index}> {text} </li>
                ))
            }
        </div>
    )
}
