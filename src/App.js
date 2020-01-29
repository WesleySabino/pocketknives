import React from 'react'
import theme from './themes/theme'

function App () {
  return (
    <>
      <h1>Pocketknives</h1>
      <h2>{theme.colors.bg.main} + testing</h2>
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
