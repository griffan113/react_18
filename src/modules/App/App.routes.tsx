import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';

export const AppRoutes = () => {
  const outlet = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);

  return outlet;
};
