import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppModule from '../modules/App/App.module';
import AuthModule from '../modules/Auth/Auth.module';

const Routes: React.FC = () => (
  <BrowserRouter>
    <AppModule />
    <AuthModule />
  </BrowserRouter>
);

export default Routes;
