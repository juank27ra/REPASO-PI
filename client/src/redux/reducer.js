import {GET_CHARACTER, POST_CHARACTER, GET_EPISODES} from '../redux/actions'

const initialState = {
    character: [],
    episodes:[]

};

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_CHARACTER:
        return {
            ...state,
            character: action.payload
        }
    case POST_CHARACTER:
        return {
            ...state,
            character: [...state.character, action.payload]
        }
    case GET_EPISODES:
        return {
            ...state,
            episodes: action.payload
        }
    default:
        return state
  }
}

