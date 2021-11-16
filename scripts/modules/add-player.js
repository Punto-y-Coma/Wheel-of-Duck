import { repeatName } from "./name-no-repeat.js"

export function inyectPlayer(name) {
    let list = document.getElementById('player-list')
    var newItem = `
    <div id="${name}">
        <p> ${name} </p>
        <button id="btn-delete-player"> X </button>
        <button id="btn-modify-player"> * </button>
    </div>
    
    list.innerHTML += newItem
    
}

var playerList = []

export function addPlayer() {
    let playerName = document.getElementById('player-input').value
    if(!repeatName(playerName, playerList)){
        playerList.push(playerName)
        inyectPlayer(playerName)
    }
    let cleanInput = document.getElementById("player-input").value = ""
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
