import Song from './SongHowl.js';
import {play_song} from './SongHowl.js';
export default class Player{
  constructor(map) {
    
    var i = 1;
    for (var j in map) {
      
      const vinyl = `.v${i}`;
      const b = `.b${i}`;
      const c = `.cov${i}`;
      
      
      const song = new Song( map[j], vinyl, b);
	
       
	document.querySelector(c).addEventListener("click", () =>
	{play_song(song);});
	document.querySelector(c).removeEventListener("click", () =>
	{play_song(song);});
      i++;
      
    }
  }
}
