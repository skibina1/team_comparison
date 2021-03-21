const HOST = 'https://team-comparison-db-api.herokuapp.com/'

async function getData(team1, team2) {
  let response = await fetch(HOST + 'matches/select?team1='+team1+'&team2='+team2)
    .then(response => response.json())
    .then(res => { return res })
  return response
}

export { getData }