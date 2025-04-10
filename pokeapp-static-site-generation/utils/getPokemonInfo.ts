import { pokeApi } from "../api";
import { PokemonDetail } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  // Consulta la API del item o id seleccionado
  const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${nameOrId}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }
}

