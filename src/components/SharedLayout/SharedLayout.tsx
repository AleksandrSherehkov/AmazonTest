import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import { Header } from '../Header/Header';

const SharedLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" flex flex-auto">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
