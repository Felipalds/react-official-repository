import React from 'react'
import { NameButton } from './NameButton'

const UseState = () => {

    const [ name, setName ] = React.useState("")

    const handleKeyDown = (e) => {
        console.log(e)
        setName(e.target.value)
    }

    return (<div>
        <h1>Bom dia {name}</h1>
        <input  onKeyDown={handleKeyDown}></input>
        <NameButton name={name} setNameAwesome={setName}/>
    </div>)
}

export default UseState