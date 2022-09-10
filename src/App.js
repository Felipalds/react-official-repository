import React from 'react'
import Status from './exercises/Status'
import Movies from './classes/Movies'
import ColorProducts from './exercises/ColorProducts'
import Form from './classes/Form/Form'
import FirstPage from './exercises/FirstPage/FirstPage'

const examples = [
<Status/>, 
<Movies/>, 
<ColorProducts/>, 
<>
    <Form info="Formulário de Tal"/>
    <Form info="Segundo formulário" />
</>,
<FirstPage />
]

const App = () => {
    return(
        <div>
            {examples[4]}
        </div>
    )
}

export default App