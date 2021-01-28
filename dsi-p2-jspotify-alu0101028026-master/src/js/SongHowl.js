import {Howl, Howler} from 'howler';

export default class Song {
  constructor ( file, vinyl, b) {
    this.s = new Howl({
		src: [file],
		autoplay: false,
		loop: true,
		volume: 1
	});
    this.tag = document.querySelector(vinyl);
    this.but = document.querySelector(b);
    this.on = true;
    

    
  }
}

export function play_song(song) {
    
    if (song.on === true) {
	var forward = 1;
	
      song.tag.classList.add('open');
      song.s.play();
      song.on = false;
      song.but.onclick = () => { 
	      
              song.s.load();
	      song.s.stop();
	      song.s.play();
	};



      
    } else {
      song.tag.classList.remove('open');
      song.s.pause();
      song.on = true;	
      song.but.onclick = () => {
              song.s.load();
	      song.s.stop();
	      
	};
      
    }
  
}
