import React from 'react'


// FORMA QUE NÃO FUNCIONA!
// const InitialStates = () => {
//     let isActive = true

//     function handleClick(){
//         isActive = !isActive
//         console.log(isActive)
//     }

//     return (
//         <button 
//             disabled={!isActive}
//             onClick={handleClick}
//         >
//             {isActive ? "Botão está ativo." : "Inativo no momento!"}
//         </button>
//     )
// }


const InitialStates = () => {

    const [ isActive, setIsActive ] = React.useState(true)


    function handleClick(){
        setIsActive(!isActive)
    }

    return (
        <button 
            onClick={handleClick}
        >
            {isActive ? "Botão está ativo." : "Inativo no momento!"}
        </button>
    )
}


export default InitialStates
