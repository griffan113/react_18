import { useRoutes } from 'react-router-dom';

import Login from './pages/Login';

export const AuthRoutes = () => {
  const outlet = useRoutes([
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return outlet;
};
