import React from "react"
import Header from "./Header"
import Produtos from "./Produtos"
import Home from "./Home"

const FirstPage = () => {
    const { pathname } = window.location
    return (
        <>
            <Header></Header>
            {pathname === "/produtos" ? <Produtos color="blue"/> : <Home color="red"/> }
        </>
    )
}

export default FirstPage