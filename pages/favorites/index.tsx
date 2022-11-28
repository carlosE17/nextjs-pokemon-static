import React, { useEffect, useState} from 'react'
import { NextPage } from 'next'
import { MainLayout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'
import { FavoritePokemons } from '../../components/pokemon'



const FavoritesPage:NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>(([]));

  useEffect(() => {
    setFavoritePokemons(localFavorites.getFavorites());
  }, []);
  

  return (
    <MainLayout title='Favorite pokemon'>
      {favoritePokemons.length===0
      ?(<NoFavorites />)
      :(<FavoritePokemons favoritePokemons={favoritePokemons} />)}
        
    </MainLayout>
  )
}


export default FavoritesPage;
