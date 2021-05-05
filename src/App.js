import React, { useEffect, useState } from 'react'
import './App.css'
import SelectTeam from './components/SelectTeam'
import { ProgressBar, ProgressMeter } from './components/ProgressBar'
import { calculateTeamStats, getData, getTeams } from './util'
import logo from './img/logo.jpg'

function App() {
  const [teamA, setTeamA] = useState(null)
  const [teamB, setTeamB] = useState(null)
  const [draw, setDraw] = useState(null)
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
      setDraw(`Remisy: ${draw}`)
      setResults(results = {
        sum: team1result + team2result + draw,
        teamAwin: team1result,
        teamBwin: team2result,
        draw: draw
      })     
    }
  }, [teamA, teamB])
  
  return (
    <div className="App">
      <div className="header">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <div className="empty-row"></div>
        <span className="title">PORÓWNYWARKA DRUŻYN</span>
        <div className="empty-row"></div>
        <div className="empty-row"></div>
      </div>
      <div className="main">
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
            <div className="amount">{draw}</div>  
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
      <div>
        FOOTER
      </div>   
    </div>
  )
}

export default App
