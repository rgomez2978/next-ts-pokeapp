import { useEffect, useState } from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confetti from 'canvas-confetti';

import { pokeApi } from "../../api";
import { PokemonDetail } from "../../interfaces";
import { Layout } from "../../components/layouts";
import { getPokemonInfo, localFavorites } from "../../utils";


interface Props {
  pokemon: PokemonDetail;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

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


  // useEffect(() => {
  //   console.log('isInFavorites', typeof isInFavorites, isInFavorites)
  //   setColorBtn(isInFavorites ? "success" : "warning");
  // }, [isInFavorites])

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>

        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || pokemon.sprites.other?.home.front_default || '/img/image-placeholder.svg'}
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

                {pokemon.sprites.front_default && (
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                )}

                {pokemon.sprites.back_default && (
                  <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                )}

                {pokemon.sprites.front_shiny && (
                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                )}

                {pokemon.sprites.back_shiny && (
                  <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                )}

              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}


// Se ejecuta del lado del server cundo se hace el build para crear o registrar las paginas o rutas de cada item
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  // Se crea un areglo de 151 posiciones
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemon151.map((id) => ({
      params: { id }
    })),
    // fallback: false, // SSG - muestra mensaje de 404 si pasa d e151
    fallback: 'blocking', // ISG - Muestra id o pokemon si existe si no retorna el error 404
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400,  //ISR - Se genere cada 24hrs (60 seg * 60 min * 24 hrs)
  }
}


export default PokemonPage;