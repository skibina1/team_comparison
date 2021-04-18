import React, { useEffect, useState } from 'react'
import './App.css'
import SelectTeam from './components/SelectTeam'
import { ProgressBar, ProgressMeter } from './components/ProgressBar'
import { calculateTeamStats, getData } from './util'

const teams = [
  { team: 'Black Widow' },
  { team: 'Young Lions'},
  { team: 'Nie wybieraj'},
  { team: 'Top Smokers Club Reprezentant'}
]

function App() {
  // let sum = 0, teamAwin = 0, teamBwin = 0
  const [teamA, setTeamA] = useState(null)
  const [teamB, setTeamB] = useState(null)
  const [response, setResponse] = useState(null)
  let [results, setResults] = useState({
    sum: 0,
    teamAwin: 0,
    teamBwin: 0
  })

  useEffect( async () => {
    if(teamA && teamB){
      const {team1result, team2result, draw} = calculateTeamStats(await getData(teamA, teamB), teamA, teamB)
      // teamAwin = team1result
      // teamBwin = team2result
      // sum = teamAwin + teamBwin
      setResponse(`${teamA}: ${team1result}, ${teamB}: ${team2result}, draw: ${draw}, `)
      setResults(results = {
        sum: team1result + team2result,
        teamAwin: team1result,
        teamBwin: team2result
      })
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
        <ProgressBar>
          <ProgressMeter value={results.teamAwin/results.sum} color='orange' />
          <ProgressMeter value={1 - results.teamAwin/results.sum} color='blue' />
        </ProgressBar>
        {response}
      </div>    
    </div>
  )
}

export default App
