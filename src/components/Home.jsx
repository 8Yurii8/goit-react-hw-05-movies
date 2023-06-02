import React from 'react';
import { Header } from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import { TopMovies } from './TopMovies';

const Home = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <Outlet />
      {location.pathname === '/' && (
        <>
          <h1>Trending today</h1>
          <TopMovies />
        </>
      )}
    </>
  );
};
export default Home;
