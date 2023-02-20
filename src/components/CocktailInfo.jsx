import { Paragraph } from '../components/Paragraph';
import { Badge } from '../components/Badge';
import { formatDate } from '../helpers/formatDate';
import PropTypes from 'prop-types';

export const CocktailInfo = ({
  strDrink,
  strDrinkThumb,
  strAlcoholic,
  strCategory,
  strInstructions,
  strGlass,
  dateModified,
}) => {
  return (
    <div className='flex md:flex-row flex-col gap-6'>
      <div className='border border-gray-400 rounded-2xl shadow-lg overflow-hidden w-1/4'>
        <img src='strDrinkThumb' alt='strDrink' />
      </div>

      <div className='px-10 flex flex-col gap-10  w-3/4 bg-white rounded-lg shadow-md py-12'>
        <h1 className='text-center font-black text-gray-700 text-4xl'>
          strDrink
        </h1>

        <div className='flex items-center justify-between border-b py-2'>
          <Paragraph>
            Type:{''}
            <Badge>strAlcoholic</Badge>
          </Paragraph>

          <Paragraph>
            Category:{''}
            <Badge>strCategory</Badge>
          </Paragraph>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='font-black text-gray-800 text-2xl'>Instruction:</h2>
          <Paragraph>strInstructions</Paragraph>
        </div>

        <div className='flex items-center justify-between border-b p-2'>
          <Paragraph>
            Preview:{''}
            <Badge>strGlass</Badge>
          </Paragraph>

          <Paragraph>
            Published:{''}
            <Badge>{formatDate(dateModified)}</Badge>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

CocktailInfo.propTypes = {
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  strAlcoholic: PropTypes.string,
  strCategory: PropTypes.string,
  strInstructions: PropTypes.string,
  strGlass: PropTypes.string,
  dateModified: PropTypes.string,
};
