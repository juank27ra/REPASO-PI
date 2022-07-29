import React from 'react'
import style from '../style/card.module.css'

export default function Card({name, species, origin, image}) {      //destructurin es=props
    
  return (

    <div className={style.cards}>
    <h1 >{name} </h1>
    <img src={image} alt='algo'/>
    <p>{species}</p>
    <p>{origin}</p>
    </div>
  )
}
