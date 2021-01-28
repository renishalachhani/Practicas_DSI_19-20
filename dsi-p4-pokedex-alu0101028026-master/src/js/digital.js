setInterval(Time,100);

function Time (){
    const d = new Date();
    

    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const seconds = d.getSeconds().toString().padStart(2, '0');
    


    let h = document.getElementById('h');
    let m = document.getElementById('m');
    let s = document.getElementById('s');


   
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
}
