import React, { useEffect, useState } from 'react'
import './App.css'
import SelectTeam from './components/SelectTeam'
import { getData } from './util'

const teams = [
  { team: 'Black Widow' },
  { team: 'Young Lions'}
]

function App() {
  const [teamA, setTeamA] = useState('dupa')
  const [teamB, setTeamB] = useState(null)

  // useEffect( async () => {
  //   let response = await getData('Black Widow', 'Young Lions')
  //   console.log(response)
  //   setText(JSON.stringify(response))
  // }, [])
  
  return (
    <div className="App">
      <div>
        <SelectTeam 
          teams={teams}
          setTeamA={setTeamA}
        />        
      </div>
      <div>
        {teamA}
      </div>
    </div>
  )
}

export default App
