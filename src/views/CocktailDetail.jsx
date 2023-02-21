import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { GoBackBtn } from "../components/GoBackBtn";
import { CocktailInfo } from "../components/CocktailInfo";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { routes } from "../routes";
import { getCocktailDetail } from "../api/cocktail-service";

export const CocktailDetail = () => {
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { cocktailId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!cocktailId) return;

    const getCocktail = async () => {
      try {
        setLoading(true);
        const data = await getCocktailDetail(cocktailId);
        setCocktail(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCocktail();
  }, [cocktailId]);

  const backPath = location.state?.from ?? routes.HOME;

  return (
    <>
      <h1 className="uppercase text-4xl text-gray-600 text-center">
        CocktailDetail
      </h1>
      <GoBackBtn path={backPath} />
      {cocktail && <CocktailInfo {...cocktail} />}
      {loading && <Loader />}
    </>
  );
};
