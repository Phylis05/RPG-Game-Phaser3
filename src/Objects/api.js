import axios from 'axios';

const setSores = (() => {
  const api = {
    key: 'AIzaSyAINjZjEBTfYYfk5fh3TvGM2qzX7IINYlQ',
    baseurl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
  };

  const url = `${api.baseurl}${api.key}/scores/`;

  const saveScore = (player, score = 0) => {
    const details = { player, score };
    return axios.post(url, details).then(response => response.data);
  };

  const getScores = () => axios.get(url).then(response => response.data.result);

  return {
    saveScore, getScores,
  };
})();

export default setSores;