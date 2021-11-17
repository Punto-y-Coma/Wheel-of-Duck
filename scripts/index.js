import { addPlayer, inyectPlayer } from "./modules/add-player.js";
import { carrouselAnimation } from "./modules/animations.js";
import { repeatName } from "./modules/name-no-repeat.js";
import { deletePlayer } from "./modules/delete-player.js";



const addBtn = document.getElementById('btn-add-player');
const modBtn = document.getElementById('btn-modify-player');

if(document.getElementById('btn-delete-player')){

    console.log(delBtn);
    const delBtn = document.getElementById('btn-delete-player');
    delBtn.change = deletePlayer;
}




addBtn.onclick = addPlayer;



window.onload = localStorage.clear();