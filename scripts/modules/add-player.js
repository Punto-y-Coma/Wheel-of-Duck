export function inyectPlayer(name) {
    let list = document.getElementById('player-list')
    var newItem = `
    <p> ${name} </p>
    `
    list.innerHTML += newItem
}

var playerList = []

export function addPlayer() {
    let playerName = document.getElementById('player-input').value
    playerList.push(playerName)
    inyectPlayer(playerName)
    return playerList
}

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
