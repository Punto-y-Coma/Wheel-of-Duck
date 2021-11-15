export function addPlayer() {
    var playerName = document.getElementById('player-input').value
    var listCheck = localStorage.getItem('playerList')
    if (listCheck == null) {
        localStorage.setItem('playerList', playerName)
    }
    if (listCheck != null) {
        localStorage.setItem('playerList', localStorage.getItem('playerList') + " # " + playerName)
    }
    console.log('test')
}