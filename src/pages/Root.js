import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigations';

function RootLayout() {
  return (
    <>
      {' '}
      <MainNavigation />
      <main>
        {' '}
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
