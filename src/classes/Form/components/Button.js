import React from 'react'

const Button = (props) => {
    const text = props.text
    return (
        <>
            <button>{text}</button>
        </>
    )
}

export default Button