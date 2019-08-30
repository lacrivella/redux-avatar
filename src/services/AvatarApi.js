export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => {
      if(!res.ok) throw 'unable to get character';

      return res.json();
    })
    .then(json => json.map(character => ({
      id: character._id,
      name: character.name,
      img: character.photoUrl
    })));
};
