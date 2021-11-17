export function inyectDuckPlayer(name){
    let duckList = document.getElementById('duck_player')
    var newDuck = `                
        <img src="assets/duck-alive.png" alt="Duck">
        <p class="player-name">${name}</p>
    `
    duckList.innerHTML += newDuck
    console.log('patitostest')
}

/* export function addPlayer() {
    let playerName = document.getElementById('player-input').value
    if(!repeatName(playerName, playerList)){
        playerList.push(playerName)
        inyectPlayer(playerName)
    }
    let cleanInput = document.getElementById("player-input").value = ""
} */