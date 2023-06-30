import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../MainHeader/MainHeader';

function Layout() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
