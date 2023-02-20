import axios from 'axios';
const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1';

const urls = Array.from({ length: 12 }, () => BASE_URL);

export const getTrendingCocktails = () => {
  return Promise.all(
    urls.map(async (url) => {
      const { data } = await axios.get(url);
      return data;
    })
  );
};

export const getCocktailDetail = async (id) => {
  const { data } = await axios.get(`/lookup.php?i=${id}`);

  return data.drinks[0];
};

export const searchByName = async (query) => {
  const { data } = await axios.get(`/search.php?s=${query}`);

  return data;
};
