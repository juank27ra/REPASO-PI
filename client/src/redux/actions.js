import axios from "axios"
export const GET_CHARACTER = 'GET_CHARACTER'


const getCharacter = () => {
    return async (dispatch) => {
         const json = await axios.get(`http://localhost:3001/characters`)
         return dispatch({
            type: GET_CHARACTER,
            payload: json.data
         })
        }
    }

export default getCharacter