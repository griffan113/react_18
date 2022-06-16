import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRoutes } from '../modules/App/App.routes';
import { TasksRoutes } from '../modules/Tasks/Tasks.routes';

const Routes: React.FC = () => (
  <Router>
    <AppRoutes />
    <TasksRoutes />
  </Router>
);

export default Routes;
