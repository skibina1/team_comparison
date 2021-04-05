const HOST = 'https://team-comparison-db-api.herokuapp.com/'

async function getData(team1, team2) {
  let response = await fetch(HOST + 'matches/select?team1='+team1+'&team2='+team2)
    .then(response => response.json())
    .then(res => { return res })
  return response
}

function calculateTeamStats(matches, team1, team2){
  let team1win, team2win
  matches.forEach(match => {
    //console.log(match)
    if((match.home_team === team1 && match.home_result > 45) || (match.away_team === team1 && match.away_result > 45)){
      team1win =+ 1
    }
    if((match.home_team === team2 && match.home_result > 45) || (match.away_team === team1 && match.away_result > 45)){
      team2win =+ 1
    }    
  })
}

export { getData, calculateTeamStats }