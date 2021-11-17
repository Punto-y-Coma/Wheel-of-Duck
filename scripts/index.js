import { addPlayer, inyectPlayer } from "./modules/add-player.js";
import { carrouselAnimation } from "./modules/animations.js";
import { repeatName } from "./modules/name-no-repeat.js"
import { inyectDuckPlayer } from "./modules/carrousell.js";

const addBtn = document.getElementById('btn-add-player')

addBtn.onclick = addPlayer

window.onload = localStorage.clear()