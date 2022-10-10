import React from 'react'

export const NameButton = ({name, setNameAwesome }) => {

    return (
        <button disabled={name.length > 0}  onClick={() => setNameAwesome("Chuck Norris")}>
            DEIXE SEU NOME INCRÍVEL!
        </button>
    )
}