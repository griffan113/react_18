import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from './App.layout';
import Home from './pages/Home';

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);
