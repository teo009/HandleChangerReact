import React, { useState } from 'react'
import InputNumber from './InputNumber';
import InputRange from './InputRange';

const CompForm = () => {

    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')

    const [age, setAge] = useState(20)

    const handleChange = (e) => {
        if (e.target.name === 'nombre') {
            setName(e.target.value)
        } else {
            setlastName(e.target.value)
        }
    }

    return (
        <div style={{ padding: '100px', textAlign: 'center' }}>
            <label>Nombre </label>
            <input 
                type="text" defaultValue={name} name="nombre" onChange={handleChange}
            />
            <label> Apellido </label>
            <input 
                type="text" defaultValue={lastName} name="apellido" onChange={handleChange} 
            />

            <label> Edad </label>
            <InputRange value={age} setValue={e => setAge(e.target.value)} />
            <InputNumber value={age} setValue={e => setAge(e.target.value)} />
            <p>{ name } { lastName } {age}</p>
        </div>
    )
}

export default CompForm;