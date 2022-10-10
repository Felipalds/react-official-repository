import React from 'react'
import Status from './exercises/Status'
import Movies from './classes/Movies'
import ColorProducts from './exercises/ColorProducts'
import Form from './classes/Form/Form'
import FirstPage from './exercises/FirstPage/FirstPage'
import InitialStates from './classes/States/InitialStates'
import UseState from './classes/States/UseState'

const examples = [
<Status/>, 
<Movies/>, 
<ColorProducts/>, 
<>
    <Form info="Formulário de Tal"/>
    <Form info="Segundo formulário" />
</>,
<FirstPage />,
<InitialStates />,
<UseState />
]

const App = () => {
    return(
        <div>
            {examples[6]}
        </div>
    )
}

export default App