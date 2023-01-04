function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
}

function convertPokemonToHTML(pokemon) {
  return `
      <li class="pokemon">
        <span class="number">#00${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join("")}
            </ol>

            <img src="${pokemon.sprites.other.dream_world.front_default}"
                alt=${pokemon.name}>
        </div>
    </li>`;
}

const pokemonOl = document.getElementById("pokemonOl");

pokeApi.getPokemons().then((pokemonList = []) => {
  pokemonOl.innerHTML += pokemonList.map(convertPokemonToHTML).join("");
});
