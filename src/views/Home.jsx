import { CocktailsList } from "../components/CocktailsList";
import { Section } from "../components/Section";
import { getTrendingCocktails } from "../api/cocktail-service";
import { Loader } from "../components/Loader";
import { useEffect, useState } from "react";

export const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCocktails = async () => {
      try {
        setLoading(true);
        const data = await getTrendingCocktails();
        setCocktails(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCocktails();
  }, []);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  return (
    <>
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        {cocktails.length > 0 && <CocktailsList cocktails={cocktails} />}
      </Section>
      {loading && <Loader />}
    </>
  );
};
