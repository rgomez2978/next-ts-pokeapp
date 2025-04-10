import { FC } from "react";
import { useRouter } from "next/router";
import { Card, Grid } from "@nextui-org/react"


interface Props {
  pokemonId: number;
}

const PokemonFavoriteCard: FC<Props> = ({ pokemonId }) => {

  const router = useRouter();

  const onFavoritedClicked = () => {
    router.push(`/pokemon/${pokemonId}`)
  }

  return (
    <Grid key={pokemonId} xs={6} sm={4} md={2} xl={1}>
      <Card hoverable clickable css={{ padding: '20px' }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={100}
          height={140}
          onClick={onFavoritedClicked}
        />
      </Card>
    </Grid>
  )
}

export default PokemonFavoriteCard
