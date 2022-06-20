import React from 'react';

import { AppRoutes } from '../modules/App/App.routes';
import { TasksRoutes } from '../modules/Tasks/Tasks.routes';

const Routes: React.FC = () => (
  <>
    <AppRoutes />
    <TasksRoutes />
  </>
);

export default Routes;
