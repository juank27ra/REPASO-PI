import {GET_CHARACTER} from '../redux/actions'

const initialState = {
    character: [],

};

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_CHARACTER:
        return {
            ...state,
            character: action.payload
        }
    default:
        return state
  }
}

