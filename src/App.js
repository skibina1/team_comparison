import React, { useEffect, useState } from 'react'
import './App.css'
import SelectTeam from './components/SelectTeam'
import { calculateTeamStats, getData } from './util'

const teams = [
  { team: 'Black Widow' },
  { team: 'Young Lions'},
  { team: 'Nie wybieraj'}
]

function App() {
  const [teamA, setTeamA] = useState(null)
  const [teamB, setTeamB] = useState(null)
  const [response, setResponse] = useState(null)

  useEffect( async () => {
    if(teamA && teamB){
      //console.log(await getData(teamA, teamB))
      calculateTeamStats(await getData(teamA, teamB))
      //setResponse(JSON.stringify(await getData(teamA, teamB)))
    }
  }, [teamA, teamB])
  
  return (
    <div className="App">
      <div>
        <SelectTeam 
          teams={teams}
          setTeam={setTeamA}
        />        
        {teamA}
      </div>
      <div>
        <SelectTeam 
          teams={teams}
          setTeam={setTeamB}
        />        
        {teamB}
      </div> 
      <div>
        <ProgressBar/>
        {response}
      </div>    
    </div>
  )
}

const ProgressBar = (/*{ children }*/) => {
  return (
    <div className="progress-bar" >
      {/* {children} */}
    </div>
  )
}

export default App
