import { deletePlayer } from "./delete-player.js";
import { repeatName } from "./name-no-repeat.js"

export function inyectPlayer(name) {
    let list = document.getElementById('player-list')
    var newItem = `
    <div id="${name}">
        <p> ${name} </p>
        <button class="btn-delete"> X </button>
        <button id="btn-modify-${name}-"> * </button>
    </div>`

    list.innerHTML += newItem
}

export function eventToDelete()
{
    const btnsDelete = document.querySelectorAll('.btn-delete');
    
    btnsDelete.forEach( btn => {
        btn.addEventListener('click', (e) => {
            deletePlayer(e.target.parentNode.id);
        })
    })
}

var playerList = []

export function addPlayer() {
    var playerName = document.getElementById('player-input').value
    var players = document.getElementById('player-list')
    if(!repeatName(playerName, playerList)){
        playerList.push(playerName)
        inyectPlayer(playerName)
        eventToDelete()
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
