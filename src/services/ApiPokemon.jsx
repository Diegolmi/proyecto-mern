
const API_URL  = 'https://pokeapi.co/api/v2/pokemon' ;


export const getPokemons = async (limit = 10, offset = 0) => {
  const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data
}


export const getIdPokemon = async (pokemonId) => {
    const response = await fetch(`${API_URL}/${pokemonId}`);
        const data = await response.json();
        return data
}