export default class Song {
  constructor ( file, vinyl, b, n, m, f, bac) {
    this.s = new Audio(file);
    this.tag = document.querySelector(vinyl);
    this.but = document.querySelector(b);
    this.on = true;
    this.n = document.querySelector(n);
    this.m = document.querySelector(m);
    this.f = document.querySelector(f);
    this.bac = document.querySelector(bac);
    

    
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
	      song.s.play();
	};
      song.m.onclick = () => { 
              song.s.muted = true;
	      
	      
	};
      song.n.onclick = () => { 
              song.s.muted = false;
	};
      song.bac.onclick = () => { 
	      if(forward < 4){
		 forward++; }
              song.s.playbackRate = forward;
	      
	      
	};
      song.f.onclick = () => { 
	      if(forward > 1){
		 forward--; }
              song.s.playbackRate = forward;
	};


      
    } else {
      song.tag.classList.remove('open');
      song.s.pause();
      song.on = true;	
      song.but.onclick = () => {
              song.s.load();
	      
	};
      
    }
  
}
