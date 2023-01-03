function convertPokemonToHTML(pokemon) {
  return `
      <li class="pokemon">
        <span class="number">#006</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">fire</li>
                <li class="type">flying</li>
            </ol>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
                alt=${pokemon.name}>
        </div>
    </li>`;
}

const pokemonOl = document.getElementById("pokemonOl");

pokeApi.getPokemons().then((pokemonList = []) => {
  pokemonOl.innerHTML += pokemonList.map(convertPokemonToHTML).join('');
});