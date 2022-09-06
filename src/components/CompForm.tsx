import React from 'react'
import { useState } from 'react'

const CompForm = () => {

    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')
    const [age, setAge] = useState(20) 

    const handleChange = (e) => {
        console.log(e)
        if (e.target.name === 'nombre') {
            setName(e.target.value)
        } else if(e.target.name === 'apellido') {
            setlastName(e.target.value)
        } else {
            setAge(e.target.value < 20 ? 20 : e.target.value)
        }
    }

    return (
        <div style={{ padding: '100px', textAlign: 'center' }}>
            <label>Nombre </label>
            <input 
                type="text" defaultValue={name} name="nombre" onChange={handleChange}
            />
            <label> Apellido</label>
            <input 
                type="text" defaultValue={lastName} name="apellido" onChange={handleChange} 
            />
            <label> Edad</label>
            <input 
                type="number" defaultValue={age} onChange={handleChange}
            />
            <p>{ name } { lastName } {age}</p>
        </div>
    )
}

export default CompForm;