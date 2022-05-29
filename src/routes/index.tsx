import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRoutes } from '../modules/App/App.routes';

const Routes: React.FC = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default Routes;
