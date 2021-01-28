export default class Conversation {
  constructor(dialogue) {
    this.dialogue = dialogue;
  }

  addMessage(conv) {
    conv.map((mes) => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = mes.text;
      msg.lang = mes.author.msg.lang;
      msg.rate = mes.author.msg.rate;
      msg.pitch = mes.author.msg.pitch;

      msg.volume = mes.author.msg.volume;
      msg.onstart = () => {
        this.dialogue.innerHTML += `<div class="mes" style="color: ${mes.author.color}"><img src="${mes.author.avatar}" width=\"80px\" height=\"80px\"> ${mes.author.name}: ${mes.text}</div>`;
      };

      //window.navigator.vibrate(1000);
      speechSynthesis.speak(msg);
    });
  }

  wordToWord(conv) {
    conv.map((mes) => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = mes.text;
      msg.lang = mes.author.msg.lang;
      msg.rate = mes.author.msg.rate;
      msg.pitch = mes.author.msg.pitch;

      msg.volume = mes.author.msg.volume;
      msg.onstart = () => {
        this.dialogue.innerHTML += `<div class="mes" style="color: ${mes.author.color}"><img src="${mes.author.avatar}" width=\"80px\" height=\"80px\"> ${mes.author.name}: ${mes.text}</div>`;
      };

      /*

		msg.onstart = () => {
			this.dialogue.innerHTML += `<div class="mes" style="color: ${mes.author.color}"><img src="${mes.author.avatar}" width=\"80px\" height=\"80px\"> ${mes.author.name}: <div class="texto{i}"> </div> </div>`;
			};

		msg.onboundary = (event) => document.querySelector(`#texto${i}`).innerHTML = mes.text.substring(0, event.charIndex+event.charLength+1);*/

      //navigator.vibrate(1000);
      speechSynthesis.speak(msg);
    });
  }

  letterToLetter(conv) {
    conv.map((mes) => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = mes.text;
      msg.lang = mes.author.msg.lang;
      msg.rate = mes.author.msg.rate;
      msg.pitch = mes.author.msg.pitch;

      msg.volume = mes.author.msg.volume;
      msg.onstart = () => {
        this.dialogue.innerHTML += `<div class="mes" style="color: ${mes.author.color}"><img src="${mes.author.avatar}" width=\"80px\" height=\"80px\"> ${mes.author.name}: ${mes.text}</div>`;
      };

      /*

		msg.onstart = () => {
			this.dialogue.innerHTML += `<div class="mes" style="color: ${mes.author.color}"><img src="${mes.author.avatar}" width=\"80px\" height=\"80px\"> ${mes.author.name}: <div class="texto{i}"> </div> </div>`;
			};
		msg.onboundary = (event) => document.querySelector(`#texto${i}`).innerHTML = mes.text.substring(0, event.charIndex+event.charLength+1);*/

      //navigator.vibrate(1000);
      speechSynthesis.speak(msg);
    });
  }
}
