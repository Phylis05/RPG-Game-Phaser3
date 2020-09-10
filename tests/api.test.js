import API from '../src/Objects/api';

test('Score must not be 0', () => {
  API.saveScore('lilo', 0)
    .then((response) => {
      expect(response).toBe(null);
    })
    .catch((error) => error);
});