import { getCharacters } from '../services/AvatarApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
// export const fetchCharacters = () => dispatch => {
//   dispatch({ type: FETCH_CHARACTERS_LOADING });
//   getCharacters()
//     .then(character => {
//       dispatch({
//         type: FETCH_CHARACTERS,
//         payload: character
//       });
//     });
// };

export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS,
  payload: getCharacters(),
  pendingType: FETCH_CHARACTERS_LOADING
});
