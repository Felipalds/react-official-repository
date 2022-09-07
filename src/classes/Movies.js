import React from 'react'

const movies = [
    {name: "Senhor dos Anéis", year: 2001},
    {name: "Harry Potter", year: 2005},
    {name: "Rocky", year: 1975}
]

const Movies = () => {
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies
                .filter(({year}) => year > 2000)
                .map(({name, year}) => <li key={name}>{name} - {year}</li>)}
            </ul>
        </div>
    )
}

export default Movies