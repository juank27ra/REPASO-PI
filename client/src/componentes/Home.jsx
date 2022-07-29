import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link }  from 'react-router-dom';
import {getCharacter }from '../redux/actions'
import Card from './Card';


function Home() {
    const dispatch = useDispatch()
    const allCharacters = useSelector(state => state.character)

    useEffect(() => {
      dispatch(getCharacter())
    }, [dispatch])

    // console.log("hola todos", allCharacters)

  return (
    <div>
        <br/>
        <Link to = {'/characters'}>
          <button>Crear Personaje👨👧</button>
        </Link>
    

      <h1 >Character</h1>
      {
        allCharacters ? 
        allCharacters.map(e => {
          return(

            <Card
              name = {e.name}
              image = {e.image}
              species = {e.species}
              origin = {e.origin}
              key= {e.id}
              onClose={() => alert(e.name)}
            />

          ) 
        }) : <h2>loading...</h2>
      }
    </div>
  )
}

export default Home
