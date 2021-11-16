import { addPlayer, inyectPlayer } from "./modules/add-player.js";
import { carrouselAnimation } from "./modules/animations.js";
import { repeatName } from "./modules/name-no-repeat.js"
import { deletePlayer } from "./modules/delete-player.js"


const addBtn = document.getElementById('btn-add-player')
const delBtn = document.getElementById('btn-delete-player')
const modBtn = document.getElementById('btn-modify-player')


addBtn.onclick = addPlayer
delBtn.onclick = deletePlayer(name)

window.onload = localStorage.clear()