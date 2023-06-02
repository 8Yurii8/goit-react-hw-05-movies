import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from 'style.module.css';

export const Header = () => {
  const location = useLocation();
  return (
    <div className={css.header}>
      <NavLink to="/" className={location.pathname === '/' ? css.active : ''}>
        Home
      </NavLink>

      <NavLink
        to="/Movies"
        className={location.pathname.includes('/Movies') ? css.active : ''}
      >
        Movies
      </NavLink>
    </div>
  );
};
