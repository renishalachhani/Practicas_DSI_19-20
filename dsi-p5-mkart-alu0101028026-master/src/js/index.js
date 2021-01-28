import players from "../assets/images/kart-*.png";
import { KartPlayer } from "./KartPlayer.js";
import trophy from "../assets/images/trophy.gif";

const start = document.querySelector(".start");
const restart = document.querySelector(".restart");
const track = document.querySelector(".track");
const fin = document.querySelector(".result");
const p = [];
let t  = null;
let i = 10;




for(var j in players) {

const image = players[j];
const y = i;
const name = players[j].toString().split('/').pop().split('.')[0];

const k= new KartPlayer(name, image, y);
track.appendChild(k);
p.push(k);
i += 80;
}


const startRace = () => {
  t  = setInterval(() => startIteration(), 1000/30);
  fin.innerHTML = `<img class="tro" src="${trophy}" />`;
  start.disabled = true;
  restart.disabled = true;

};

const endRace = () => {
  clearInterval(t );

  for ( var i of p) {
	if(i.isWinner() ){
		
		i.win();
		const done = i.getWinner();
		fin.innerHTML = `<img class="win" src="${done}" />
<img class="tro" src="${trophy}" />`;
		 
	} else {
		i.lose();
	}
  }
  restart.disabled = false;
};

const restartRace = () => {

  for ( var i of p) {
	i.restart();
  }
  fin.innerHTML = `<img class="tro" src="${trophy}" />`;
  start.disabled = false;
  restart.disabled = true;
  
};

const startIteration = () => {

  for ( var i of p) {
	i.inc();
	if( i.isWinner()) {
		endRace();
	}
  }

};




start.onclick = () => startRace();
restart.onclick = () => restartRace();
