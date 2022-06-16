import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TasksLayout from './Tasks.layout';
import Tasks from './pages/Tasks';

export const TasksRoutes: React.FC = () => (
  <Routes>
    <Route path="/tasks" element={<TasksLayout />}>
      <Route index element={<Tasks />} />
    </Route>
  </Routes>
);
