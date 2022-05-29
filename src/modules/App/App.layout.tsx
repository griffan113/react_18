import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => (
  <>
    <div>AppLayout Works!</div>
    <Outlet />
  </>
);

export default AppLayout;
