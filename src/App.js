import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('Test')

  useEffect(() => {
    setText('Hook start')
  }, [])

  return (
    <div className="App">
      {text}
    </div>
  )
}

export default App
