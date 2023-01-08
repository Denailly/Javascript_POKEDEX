const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemons = new Pokemon();

  pokemons.number = pokeDetail.order;
  pokemons.name = pokeDetail.name;
  pokemons.picture = pokeDetail.sprites.other.dream_world.front_default;
  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemons.types = types;
  pokemons.type = type;

  return pokemons;
}

pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
    .then((pokemonsDetails) => Promise.all(pokemonsDetails))
    .then((pokemonsDetails) => pokemonsDetails);
};
