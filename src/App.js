import React, { useEffect, useState } from 'react'
import './App.css'
import SelectTeam from './components/SelectTeam'
import { ProgressBar, ProgressMeter } from './components/ProgressBar'
import { calculateTeamStats, getData, getTeams } from './util'

const team222 = []

function App() {
  const [teamA, setTeamA] = useState(null)
  const [teamB, setTeamB] = useState(null)
  const [response, setResponse] = useState(null)
  let [results, setResults] = useState({
    sum: 0,
    teamAwin: 0,
    teamBwin: 0,
    draw: 0
  })
  let [teams, setTeams] = useState([])

  useEffect( async () => {
    setTeams(teams = await getTeams())
  }, [])

  useEffect( async () => {
    if(teamA && teamB){
      const {team1result, team2result, draw} = calculateTeamStats(await getData(teamA, teamB), teamA, teamB)
      setResponse(`Remisy: ${draw}`)
      setResults(results = {
        sum: team1result + team2result,
        teamAwin: team1result,
        teamBwin: team2result,
        draw: draw
      })     
    }
  }, [teamA, teamB])
  
  return (
    <div className="App">
      <div>
      </div>    
      <div className="header-middle">
        KUPA
      </div>
      <div>
      </div>
      <div className="left">
        <div>
          <SelectTeam 
            teams={teams}
            setTeam={setTeamA}
          /> 
        </div>
      </div>      
      <div className="center">
        <div className="progress-bar-container">
          <div className="amount">{results.teamAwin}</div>
          <div>
            <ProgressBar>
              <ProgressMeter value={results.teamAwin/results.sum} color='orange'/>
              <ProgressMeter value={results.draw/results.sum} color='#ced2d6' />
              <ProgressMeter value={1 - (results.teamAwin+results.draw)/results.sum} color='blue' />
            </ProgressBar>
          </div>
          <div className="amount">{results.teamBwin}</div>
          <div></div>  
          <div className="amount">{response}</div>  
          <div></div>
        </div>      
      </div>
      <div className="right">
        <div>
          <SelectTeam 
            teams={teams}
            setTeam={setTeamB}
          />     
        </div> 
      </div>      
    </div>
  )
}

export default App
