import Style from "./Detail.module.css"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const URL_BASE = "https://be-a-rym.up.railway.app/api/character"
const API_KEY = "1286efed4b4f.fa1078598682d4931df1"


const Detail = () => {

    const { id } = useParams()
    const [ character, setCharacter ] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]); //el [id] permite que no se generen pedidos infinitos hacia la api y no nos baneen


    return(
        <div>
            <h2>{character?.name}</h2> {/* {character?.name} es un renderizado condicional. Es decir que si en character hay algo, renderiza en este caso character.name */}
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail