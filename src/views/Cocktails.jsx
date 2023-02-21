import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SearchForm } from "../components/SearchForm";
import { Section } from "../components/Section";
import { CocktailsList } from "../components/CocktailsList";
import { Loader } from "../components/Loader";
import { searchByName } from "../api/cocktail-service";

export const Cocktails = () => {
  const [cocktails, setCocktails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search");

  useEffect(() => {
    if (!query) return;

    const getCocktails = async () => {
      try {
        setLoading(true);
        const data = await searchByName(query);
        setCocktails(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCocktails();
  }, [query]);

  return (
    <>
      <Section>
        <h1 className="uppercase text-4xl text-gray-600 text-center">
          Search Cocktails
        </h1>

        <SearchForm />
        {!!cocktails?.length && <CocktailsList cocktails={cocktails} />}
      </Section>
      {loading && <Loader />}
    </>
  );
};
