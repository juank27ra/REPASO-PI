
import React, {useState, useEffect } from "react";
import { postCharacter, getEpisodes } from "../redux/actions";
import {useDispatch,  useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import {useHistory} from 'react-router-dom'


export default function CharacterCreate() {

    const dispatch = useDispatch()
    // const history = useHistory() 
    const episodes = useSelector((state) => state.episodes)
    const [input, setInput] = useState({
        name: '',
        species: '',
        origin: '',
        image: '',
        episodes: [],
    })

    useEffect(() => {
        dispatch(getEpisodes());
    }, [dispatch]);


const handleChange=(e) =>{
    // const {name, value} = e.target   
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}

const handleSelect = (e) => {
    setInput({
        ...input,
        episodes: [...input.episodes, e.target.value]               // aqui en el estado me va a guardar cada vez que seleccione un temperamento en un array
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCharacter(input))
    alert('Personaje Creado')
    setInput({
        name: '',
        species: '',
        origin: '',
        image: '',
        episodes: [],
        
    })
    // history.push('/characters')  
}
    // console.log(input)
  return (
   <div>
   <br></br>
            <Link to='/'><button>Volver</button></Link>
            <h1>Crea Tu Perro</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
            <label>Nombre</label>
                    <input
                    type= 'text'
                    value= {input.name}
                    name= 'name'
                    onChange={(e) => handleChange(e)}
                    placeholder='Nombre'
                    />
            </div>
            <div>
            <label>Especie</label>
                    <input
                    type= 'text'
                    value= {input.species}
                    name= 'species'
                    onChange={(e) => handleChange(e)}
                    placeholder= 'Especie'
                    />
            </div>
            <div>
            <label>Origen</label>
                    <input
                    type= 'text'
                    value= {input.origin}
                    name= 'origin'
                    onChange={(e) => handleChange(e)}
                    placeholder='Origen'
                    />
            </div>
            <div>
            <label>Imagen</label>
                    <input
                    type= 'text'
                    value= {input.image}
                    name= 'image'
                    onChange={(e) => handleChange(e)}       
                    placeholder='Imagen/url'
                    />
            </div>
            <div>
            <label>Episodio</label>
                    <input
                    type= 'text'
                    value= {input.episodes}
                    name= 'episodes'
                    onChange={(e) => handleChange(e)}
                    placeholder='Nombre'
                    />
            </div>
            <select onChange={(e) => handleSelect(e)}>
                    {episodes.map((e) => (
                        <option value={e.name}>{e.name}</option>
                    ))}
            </select>
            <p>{input.episodes.map(e => e + " ,")}</p>
        </form>
   </div>
  )

    //e tiene una propiedad que es target,  e.target tiene propiedades 
  //onchange = es el que va a estar pendiente de lo que pase detro del input
}
