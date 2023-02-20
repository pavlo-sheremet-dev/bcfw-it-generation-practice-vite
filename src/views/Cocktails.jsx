import { SearchForm } from '../components/SearchForm';
import { Section } from '../components/Section';
import { CocktailsList } from '../components/CocktailsList';
import { Loader } from '../components/Loader';

export const Cocktails = () => {
  return (
    <>
      <Section>
        <h1 className='uppercase text-4xl text-gray-600 text-center'>
          Search Cocktails
        </h1>

        <SearchForm />
      </Section>
    </>
  );
};
