export default class Profile {
  constructor(name, pic, car) {
    this.name = name;
    this.color = car.color;
    this.avatar = pic;
    this.msg = new SpeechSynthesisUtterance();

    this.msg.lang = car.lang;
    this.msg.rate = car.rate;
    this.msg.pitch = car.pitch;

    this.msg.volume = car.volume;
  }
}
