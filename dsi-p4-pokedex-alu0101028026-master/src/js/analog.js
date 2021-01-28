
const secIn = document.querySelector('.sec');
const minIn = document.querySelector('.min');
const hourIn = document.querySelector('.hour');


function analog(){
  const dt = new Date();

  let second = dt.getSeconds(); 
  const secDeg = ((second / 60) * 360) + 90; 
  secIn.style.transform = `rotate(${secDeg}deg)`; 

  var minute = dt.getMinutes();
  const minDeg = ((minute / 60) * 360) + 90;
  minIn.style.transform = `rotate(${minDeg}deg)`;

  var hour = dt.getHours();
  const hourDeg = (((hour + minute / 60) / 12) * 360) + 90;
  hourIn.style.transform = `rotate(${hourDeg}deg)`;

};

setInterval(analog, 1000);
