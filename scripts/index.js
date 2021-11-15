import { addPlayer } from "./modules/add-player.js";
import { carrouselAnimation } from "./modules/animations.js";

const addBtn = document.getElementById('btn-add-player')

addBtn.onclick = addPlayer

window.onload = localStorage.clear()