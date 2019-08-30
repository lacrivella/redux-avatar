import { FETCH_CHARACTERS, FETCH_CHARACTERS_LOADING } from '../actions/characterActions';

const initialState = {
  characters: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS:
      return { ...state, loading: false,  error: null, characters: action.payload };
    default:
      return state;
  }
}
