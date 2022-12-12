
export const First = (props) => {
    const { allText } = props

    return (
        <div>
            {
                allText.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </div>
    )
}
