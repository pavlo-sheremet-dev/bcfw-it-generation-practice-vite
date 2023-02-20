import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout/Layout";
import { routes } from "../routes";
import { CocktailDetail, Cocktails, Home } from "../views";
// import { Header } from "../layout/Header/Header";
// import { Footer } from "../layout/Footer/Footer";
// import styles from "../layout/Layout/Layout.module.css";

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.COCKTAILS} element={<Cocktails />} />
        <Route path={routes.COCKTAIL_ID} element={<CocktailDetail />} />
      </Route>
      <Route path="*" element={<Navigate to={routes.HOME} />} />
    </Routes>
  );
};

// export const App = () => {
//   return (
//     <div className={styles.layout}>
//       <Header />

//       <main className={styles.main}>
//         <Routes>
//           <Route path={routes.HOME} element={<Home />} />
//           <Route path={"/" + routes.COCKTAILS} element={<Cocktails />} />
//           <Route path={"/" + routes.COCKTAIL_ID} element={<CocktailDetail />} />

//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// };
