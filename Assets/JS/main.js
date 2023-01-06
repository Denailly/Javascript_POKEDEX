function convertPokemonToHTML(pokemon) {
  return `
      <li class="pokemon">
        <span class="number">#00${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type">${type}</li>`)
                  .join("")}
            </ol>

            <img src="${pokemon.picture}"
                alt=${pokemon.name}>
        </div>
    </li>`;
}

const pokemonOl = document.getElementById("pokemonOl");

pokeApi.getPokemons().then((pokemonList = []) => {
  pokemonOl.innerHTML += pokemonList.map(convertPokemonToHTML).join("");
});
