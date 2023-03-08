import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RandomNum from './Random'
// import RandomNumberGenerator from './Components/RandomNumberGenerator'


function App() {


  return (
    <div className="App">
      {/* <RandomNumberGenerator/> */}
      <RandomNum lastIndex={88}/>
    </div>
  )
}

export default App
