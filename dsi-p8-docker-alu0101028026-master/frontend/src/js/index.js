import images from "../assets/images/*.png";
const avenger = document.getElementById('avengers');
const promises = [];
const info = () => {
	fetch('/api/')
		.then(response => response.json())
		.then(data => avengers(data));
}

info();

const avengers = (data) => {
	console.log(data);
	var i = 0;
	
	for(var j in images){
		data[i].image = images[j];
		console.log(data[i].image);
		promises.push(data[i]); 
		console.log(data[i]);
		i++;
	}
	
	Promise.all(promises).then((results) => {
		
        	const aven = results.map((result) => ({
            		character: result.character,
            		name: result.name,
            		level: result.level,
            		genre: result.genre,
            		specie: result.specie,
            		color: result.color,
			image: result.image
        	}));
        	show(aven);
	});
};

const show = (aven) => {
        
        avenger.innerHTML = aven
                .map(
                        (a) => `
                        <div id="card" style="background-color: ${a.color};">
                                <h2 id="card-title">${a.character}</h2>
				<div id="im" ><img src="${a.image}" /></div>
                                <h3 >Name: ${a.name}</h3>
                                <h3>Level: ${a.level}</h3>
                                <h3>Genre: ${a.genre}</h3>
                                <h3>Specie: ${a.specie}</h3>
                        </div>
                `
		
                )
        .join('');



};		




