import React from "react"

const produtos = [
    { nome: "Notebook", propriedades: ['16 gb ram', '512 gb', 'Passa café']},
    { nome: "Smartphone", propriedades: ['2 gb ram', '128 gb']},
    { nome: "Xiaomi", propriedades: ['22 gb ram', '128 gb', 'Cortar batatas']},
    { nome: "Apple", propriedades: ['Vermelha', 'Suculenta']},
]

const style = {
    border: "1px solid black",
    padding: "20px",
    margin: "20px"
}

const Produtos = ({color}) => {
    return (
        <>
            <h2 style={{color}}>Produtos</h2>
            <ol>
                {produtos.map(({nome, propriedades}) => {
                    return (
                        <div  style={style}>
                            <li>
                                <p>{nome}</p>
                                <ul>
                                    {propriedades.map(propriedade => {
                                        return <li>{propriedade}</li>
                                    })}
                                </ul>
                            </li>
                        </div>
                    )
                })}
            </ol>
        </>
    )
}

export default Produtos