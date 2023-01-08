const pokemonOl = document.getElementById("pokemonOl");
const loadMoreButton = document.getElementById("btnLoad");
let offset = 0;
const limit = 8;

function loadMore(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
    pokemonOl.innerHTML += pokemonList
      .map((pokemon) => {
        return `  <li class="pokemon">
      <span class="number">#00${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
        <ol class="types">
          ${pokemon.types
            .map((type) => `<li class="type">${type}</li>`)
            .join("")}
        </ol>
          <div class="pokePicture">
            <img src="${pokemon.picture}"
                alt=${pokemon.name}>
          </div>  
      </div>
      <img class="pokeballBackground" src="./Assets/IMAGES/pokeballBackground.png" />
  </li>`;
      })
      .join("");
  });
}

loadMore(offset, limit);

loadMoreButton.addEventListener("click", () => {
  loadList();
});

async function loadList() {
  offset += limit;
  await loadMore(offset, limit);
  renderEffect();
}
