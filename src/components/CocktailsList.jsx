import { CocktailCard } from './CocktailCard';
import PropTypes from 'prop-types';

export const CocktailsList = ({ cocktails }) => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-8'>
      {cocktails &&
        cocktails.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} {...cocktail} />
        ))}
    </ul>
  );
};

CocktailsList.propTypes = {
  cocktail: PropTypes.object,
};
