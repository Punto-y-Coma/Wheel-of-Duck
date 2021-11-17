import { inyectDuckPlayer } from "./carrousell.js"
import { repeatName } from "./name-no-repeat.js"


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
    if(!repeatName(playerName, playerList)){
        playerList.push(playerName)
        inyectPlayer(playerName)
        inyectDuckPlayer(playerName)
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
