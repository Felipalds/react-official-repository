import React from 'react'

const date = new Date()
const dia = date.getDay()
const mes = date.getMonth()
const ano = date.getFullYear()
const hora = date.getHours()
const minuto = date.getMinutes()

const estilo = {
    textAlign: 'center'
}

const App = () => {
    return(
        <div>
            <h1>Meu App</h1>
           
            <h2 style={estilo}>{`${dia}/${mes}/${ano} - ${hora}:${minuto}`}</h2>
            
        </div>
    )
}

export default App