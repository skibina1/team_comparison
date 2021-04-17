const HOST = 'https://team-comparison-db-api.herokuapp.com/'

async function getData(team1, team2) {
  let response = await fetch(HOST + 'matches/select?team1='+team1+'&team2='+team2)
    .then(response => response.json())
    .then(res => { return res })
  return response
}

function calculateTeamStats(matches, team1, team2){
  let team1win = 0, team2win = 0, draw = 0
  matches.forEach(match => {
    if((match.HOME_TEAM === team1 && match.HOME_RESULT > match.AWAY_RESULT) || (match.AWAY_TEAM === team1 && match.AWAY_RESULT > match.HOME_RESULT)){
      team1win += 1
    }
    if((match.HOME_TEAM === team2 && match.HOME_RESULT > match.AWAY_RESULT) || (match.AWAY_TEAM === team2 && match.AWAY_RESULT > match.HOME_RESULT)){
      team2win += 1
    }
    if(match.HOME_RESULT === match.AWAY_RESULT){
      draw += 1
    }    
  })
  return {
    team1result: team1win,
    team2result: team2win,
    draw: draw
  }
}

export { getData, calculateTeamStats }