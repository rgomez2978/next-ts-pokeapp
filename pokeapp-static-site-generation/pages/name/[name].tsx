import { useEffect, useState } from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confetti from 'canvas-confetti';

import { pokeApi } from "../../api";
import { PokemonDetail, PokemonListResponse } from "../../interfaces";
import { Layout } from "../../components/layouts";
import { getPokemonInfo, localFavorites } from "../../utils";


interface Props {
  pokemon: PokemonDetail
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existPokemonFavorites(pokemon.id))

  const [colorBtn, setColorBtn] = useState(isInFavorites ? 'success' : 'warning')

  const onTogglefavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (isInFavorites) return;

    confetti({
      zIndex: 990,
      particleCount: 100,
      spread: 100,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }

    })
  }


  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>

        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text transform="capitalize" color={'Orange'} h1>{pokemon.name}</Text>
              <Button
                color={'gradient'}
                // color={colorBtn}
                ghost={!isInFavorites}
                onClick={onTogglefavorite}>
                {isInFavorites ? 'En pokebola' : 'Guardar en pokebolla'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30} > Sprites: </Text>
              <Container direction='row' display='flex' gap={2}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}





// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  // Se crea un areglo de 151 posiciones
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
  const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)


  return {
    paths: pokemonNames.map(name => ({
      params: { name }
    })),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    }
  }
}


export default PokemonByNamePage;
