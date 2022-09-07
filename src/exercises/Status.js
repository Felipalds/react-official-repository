import React from 'react'

const clientes = [
    {
        nome: "Mario",
        dados: {
            idade: 31,
            sexo: "M",
        },
        produtos: [
            { nome: 'Notebook', preco: 2000},
            { nome: 'Geladeira', preco: 5000},
            { nome: 'Gás', preco: 150},
        ]
    },
    {
        nome: "Luana",
        dados: {
            idade: 27,
            sexo: "F",
        },
        produtos: [
            { nome: 'Celular', preco: 5000},
            { nome: 'Óculos', preco: 1200},
            { nome: 'Guitarra', preco: 2000},
            { nome: 'Cavalo', preco: 12000}
        ]
    },
]

const style = {
    valido: {
        backgroundColor: "green"
    },
    invalido: {
        backgroundColor: "red"
    }
}

const Status = () => {
    return (
        <div>
            <h1>Clientes</h1>
            {
                clientes.map((cliente, index) => {
                    let total = 0
                    return (
                        <div>
                            <h2>Nome: {cliente.nome}</h2>
                            <p>Dados do cliente: </p>
                            <ul>
                                <li>Idade: {cliente.dados.idade}</li>
                                <li>Sexo: {cliente.dados.sexo === "M" ? "Masculino" : "Feminino"}</li>
                            </ul>
                            
                            {
                            cliente.produtos.map(produto => {
                                total += produto.preco
                                return (
                                    <div>
                                        <p>{produto.nome}: <b>R${produto.preco}</b></p>
                                    </div>
                                )
                            })}
                            <h2 style={total > 10000 ? style.invalido : style.valido}>Total: {total}</h2>
                            {total > 10000 ? <h3>Você está gastando muito!</h3> : ""}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Status