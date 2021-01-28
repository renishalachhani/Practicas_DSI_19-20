import Song from './Song.js';
import {play_song} from './Song.js';
export default class Player{
  constructor(map) {
    
    var i = 1;
    for (var j in map) {
      
      const vinyl = `.v${i}`;
      const b = `.b${i}`;
      const c = `.cov${i}`;
      const n = `.n${i}`;
      const m = `.m${i}`;
      const f = `.for${i}`;
      const bac = `.bac${i}`;
      
      const song = new Song( map[j], vinyl, b, n, m,f,bac);
	
       
	document.querySelector(c).addEventListener("click", () =>
	{play_song(song);});
	document.querySelector(c).removeEventListener("click", () =>
	{play_song(song);});
      i++;
      
    }
  }
}
