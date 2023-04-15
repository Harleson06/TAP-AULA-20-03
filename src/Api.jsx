import axios from 'axios';

export function getTypes() {
  return axios.get("https://pokeapi.co/api/v2/type/")
    .then((res) => res.data.results)
    .catch((err) => {
      console.log(err);
      return [];
    });
}
