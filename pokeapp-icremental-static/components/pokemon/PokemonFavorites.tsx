import { Grid } from "@nextui-org/react"
import { FC } from "react";
import PokemonFavoriteCard from "./PokemonFavoriteCard";

interface Props {
  pokemons: number[];
}

const PokemonFavorites: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        pokemons.map((id) => (
          <PokemonFavoriteCard key={id} pokemonId={id} />
        ))
      }
    </Grid.Container>
  )
}

export default PokemonFavorites
