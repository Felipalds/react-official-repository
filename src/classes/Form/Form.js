import React from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import TextArea from "./components/TextArea"

const Form = (props) => {
    return (
        <form>
            <h1>{props.info}</h1>
            <Input></Input>
            <TextArea></TextArea>
            <Button text={props.info}></Button>
        </form>
    )
}

export default Form