import React, { useEffect, useState } from 'react'
import './App.css'
import { getData } from './util'

function App() {
  const [text, setText] = useState('Test')

  useEffect( async () => {
    let response = await getData('Black Widow', 'Young Lions')
    console.log(response)
    setText(JSON.stringify(response))
  }, [])

  return (
    <div className="App">
      {text}
    </div>
  )
}

export default App
