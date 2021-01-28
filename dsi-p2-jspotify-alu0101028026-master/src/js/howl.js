import audios from "../assets/music/*.mp3";
import Player from "./PlayerHowl.js";

const map = {};
/*const map = {
".item-1": "calma",
".item-2": "malo",
".item-3": "rain",
".item-4": "whine"};*/
let i = 1;

for (var j in audios) {

	
	map[`.item-${i}`]= audios[j];
	i++;
}

const player = new Player(map);



