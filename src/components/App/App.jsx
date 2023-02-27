import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../../layout/Layout/Layout';
import { routes } from '../../routes';
import { Home, Options } from '../../views';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.OPTIONS} element={<Options />} />
        </Route>

        <Route path='*' element={<Navigate to={routes.HOME} replace />} />
      </Routes>
    </>
  );
};
