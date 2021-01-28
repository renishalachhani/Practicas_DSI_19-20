const pokedex = document.getElementById('pokedex');


const getPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image_back: result.sprites['back_default'],
            image_front: result.sprites['front_default'],
            id: result.id
        }));
        show(pokemon);
    });
};

const show = (pokemon) => {
    
   
pokedex.innerHTML = pokemon
        .map(
            (pok) => `
        <div id="card">
            <img id="back" src="${pok.image_back}"/>
	    <img id="front" " src="${pok.image_front} "/>
            <h2 id="card-title">${pok.id}. ${pok.name}</h2>
        </div>
    `
        )
        .join('');
    


};



getPokemon();








