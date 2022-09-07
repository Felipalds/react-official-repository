import React from 'react'
import Status from './exercises/Status'
import Movies from './classes/Movies'
import ColorProducts from './exercises/ColorProducts'


const date = new Date()
const dia = date.getDay()
const mes = date.getMonth()
const ano = date.getFullYear()
const hora = date.getHours()
const minuto = date.getMinutes()

const estilo = {
    textAlign: 'center'
}

const examples = [<Status/>, <Movies/>, <ColorProducts/>]

const App = () => {
    return(
        <div>
            <h1>Meu App</h1>
            <h2 style={estilo}>{`${dia}/${mes}/${ano} - ${hora}:${minuto}`}</h2>
            {examples[2]}
        </div>
    )
}

export default App