import React, { useState } from 'react'
import theme from './themes/theme'


const App = () => {

  const [newWeight, setNewWeight] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.weight.value)
    setNewWeight( newWeight + e.target.weight.value)
  }

  return (
    <>
      <h1>Pocketknives</h1>
      <h2>Add your weight</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="weightInput">weight:</label>
        <input id="weightInput" type="text" name="weight" onChange={handleChange}/>
        <button type="submit" >add new weight</button>
      </form>
      Current weight = {newWeight}
      <h2>List of desirable functionalities:</h2>
      <ul>
        <li>Healthy tools</li>
        <li>Assets manager</li>
        <li>Articles and tutorials</li>
        <li>Links for others tools</li>
        <li>Fair Ux and UI</li>
        <li>Design system</li>
        <li>Data persistence on the server</li>
      </ul>
    </>
  )
}

export default App
