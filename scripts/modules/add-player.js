export function inyectPlayer(name) {
    let list = document.getElementById('player-list')
    var newItem = `
    <p> ${name} </p>
    `
    list.innerHTML += newItem
    console.log(typeof(playerList));
}

var playerList = []

export function addPlayer() {
    let playerName = document.getElementById('player-input').value
    playerList += [playerName]
    inyectPlayer(playerName)
    return playerList
}

// export function addPlayer() {
//     let playerName = document.getElementById('player-input').value
//     if ( playerList == null) {
//         const playerList = []
//         return playerList
//     }
//     playerList += playerName
//     inyectPlayer(playerName)
//     return playerList
// }

// export function addPlayer() {
//     let playerName = document.getElementById('player-input').value
//     let listCheck = localStorage.getItem('playerList')
//     if (listCheck == null) {
//         localStorage.setItem('playerList', playerName)
//     }
//     if (listCheck != null) {
//         localStorage.setItem('playerList', listCheck + "#" + playerName)
//     }
//     inyectPlayer(playerName)
// }
