import { useEffect, useState } from "react";
import { NextPage } from "next"
import { Layout } from "../../components/layouts";
import { NoFavorites } from '../../components/ui/NoFavorites';
import { localFavorites } from "../../utils";
import PokemonFavorites from "../../components/pokemon/PokemonFavorites";


const FavoritePage: NextPage = () => {

  const [favoriPokemons, setFavoriPokemons] = useState<number[]>([])


  useEffect(() => {
    setFavoriPokemons(localFavorites.pokemons());
  }, [])


  return (
    <Layout title="Pokemon - Favoritos">
      <h1>Favoritos</h1>
      {
        favoriPokemons.length === 0
          ? (<NoFavorites />)
          : (<PokemonFavorites pokemons={favoriPokemons} />)
      }
    </Layout>
  )

}


export default FavoritePage;
