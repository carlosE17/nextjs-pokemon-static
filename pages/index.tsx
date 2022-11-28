import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { Card, Grid, Row, Text } from "@nextui-org/react";

import { pokeApi } from "../api";
import { MainLayout } from "../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  // console.log(9,props);

  return (
    <MainLayout title="Pokemon List">
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((p) => (
          <PokemonCard key={p.id} pokemon={p}/>
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  // console.log({data});
  const pokemons: SmallPokemon[] = data.results.map((d, i) => ({
    ...d,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
