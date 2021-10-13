import React from 'react'
import { useState } from 'react'

function CompForm() {

    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')

    const handleChange = (e) => {
        console.log(e)
        if (e.target.name === 'nombre') {
            setName(e.target.value)
        } else {
            setlastName(e.target.value)
        }
    }

    return (
        <div
            style={{
                padding: '100px',
                textAlign: 'center',
            }}
        >

            <label>Nombre</label>
            <input 
                type="text" 
                defaultValue={name}
                name="nombre"
                id="nombre"
                onChange={handleChange}
            />
            <hr />
            <label>Apellido</label>
            <input 
                type="text"
                defaultValue={lastName}
                name="apellido"
                id="apellido"
                onChange={handleChange} 
            />
            <p>{ name } { lastName }</p>

        </div>
    )
}

export default CompForm