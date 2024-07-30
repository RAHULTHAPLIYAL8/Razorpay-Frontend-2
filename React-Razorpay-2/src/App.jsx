import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Slidebar from './Components/slidebar.jsx'
import './App.css'
import Container from './Components/Container.jsx'

function App() {

  return (
    <>
    <div className="grid">
      <Slidebar/>
      <div style={{backgroundColor:"black"}}>
      <Container/>
      </div>
    </div>
    </>
  )
}

export default App
