import { Link, useLocation } from 'react-router-dom';
import { routes } from '../routes';
import PropTypes from 'prop-types';

export const CocktailCard = ({
  strDrinkThumb,
  strDrink,
  strGlass,
  idDrink,
}) => {
  return (
    <li className='text-center border rounded-xl overflow-hidden shadow-md border-transparent hover:border-gray-300 cursor-pointer transition-colors'>
      <Link to={'/'}>
        <img src='strDrinkThumb' alt='strDrink' />
        <div className='px-2 py-4 flex flex-col gap-2'>
          <h2 className='text-2xl font-medium'>strDrink</h2>
          <span className='block text-sm text-gray-500'>strGlass</span>
        </div>
      </Link>
    </li>
  );
};

CocktailCard.propTypes = {
  strDrinkThumb: PropTypes.string.isRequired,
  strDrink: PropTypes.string.isRequired,
  strGlass: PropTypes.string.isRequired,
  idDrink: PropTypes.string.isRequired,
};
