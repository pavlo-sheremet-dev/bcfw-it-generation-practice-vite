import axios from "axios";
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
axios.defaults.baseURL = "https://www.thecocktaildb.com/api/json/v1/1";

const urls = Array.from({ length: 12 }, () => BASE_URL);

export const getTrendingCocktails = () => {
  return Promise.all(
    urls.map(async (url) => {
      const { data } = await axios.get(url);
      const { strDrinkThumb, strDrink, strGlass, idDrink } = data.drinks[0];
      return { strDrinkThumb, strDrink, strGlass, idDrink };
    })
  );
};

export const getCocktailDetail = async (id) => {
  const { data } = await axios.get(`/lookup.php?i=${id}`);
  const {
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strInstructions,
    strGlass,
    dateModified,
  } = data.drinks[0];
  return {
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strInstructions,
    strGlass,
    dateModified,
  };
};

export const searchByName = async (query) => {
  const { data } = await axios.get(`/search.php?s=${query}`);
  const cocktails = data.drinks.map(
    ({ strDrinkThumb, strDrink, strGlass, idDrink }) => ({
      strDrinkThumb,
      strDrink,
      strGlass,
      idDrink,
    })
  );

  return cocktails;
};
