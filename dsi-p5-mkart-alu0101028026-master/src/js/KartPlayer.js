
export class KartPlayer extends HTMLElement {
  constructor(name, image, y) {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.name = name;
    this.image = image;
    this.y = y;
    this.x = 0;
    this.op = 1;
    this.border = -1;
   

  }

  connectedCallback() {
    this.render();
  }

  get styles() {
    return `
    :host {
      --x: ${this.x}px;
      position: absolute;
      display: inline-block;
      top: ${this.y}px;
      transform: translateX(var(--x)) ;
      transition: transform 0.25s;
      will-change: transform;
    }
    
    .pic{
      opacity: ${this.op};
      width: 140px;
      height: 140px;
      
      -webkit-filter: drop-shadow(${this.border}px  ${this.border}px  0 yellow)
                      drop-shadow(-${this.border}px  -${this.border}px 0 yellow);
      filter: drop-shadow(${this.border}px  ${this.border}px  0 yellow) 
          drop-shadow(-${this.border}px -${this.border}px 0 yellow);
     }
   `;
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>${this.styles}</style>
        <item-kart></item-kart>
        <img class="pic" src="${this.image}" alt="${this.name}">
      `;
	
  }

 

  inc() {
	
    this.x += this.setSpeed();    
    this.render();
  }


  setSpeed() {
        
      	let r;
	if (this.rand() == 0) {
	    
	     
	     r = 10;
	    
	    } else {
	    
	      r = 40; 
	    
	    }
	return r;
}	

	
  rand() {
   
    return (Math.random()>0.5)? 1 : 0;
    
  }

  win() {
    this.border = 8;
    this.op = 1;
    this.render();
  }

  lose() {
    this.op = 0.3;
    this.border = -1;
    this.render();
  }

  isWinner() {
    if (this.x >= 1010 ) {
	
      return true;
    }
    return false;
  }

  restart() {
    this.x = 0;
    this.op = 1;
    this.border = -1;
    this.render();
  }

  getWinner() {
	
	if(this.isWinner()) {
		
		
		return this.image;}
	return;
 }

}

customElements.define("kart-player", KartPlayer);
