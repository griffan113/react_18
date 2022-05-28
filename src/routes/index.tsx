import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '../App';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
