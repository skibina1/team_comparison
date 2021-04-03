import React, { useEffect, useState } from 'react'
import './App.css'
import SelectTeam from './components/SelectTeam'
import { getData } from './util'

const teams = [
  { team: 'Black Widow' },
  { team: 'Young Lions'},
  { team: 'Siema'}
]

function App() {
  const [teamA, setTeamA] = useState(null)
  const [teamB, setTeamB] = useState(null)

  // useEffect( async () => {
  //   let response = await getData('Black Widow', 'Young Lions')
  //   console.log(response)
  //   setText(JSON.stringify(response))
  // }, [])

  useEffect(() => {
    if(teamA && teamB){
      console.log('both vars have value')
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
