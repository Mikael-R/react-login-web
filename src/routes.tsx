import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginPage from './pages/Login';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={LoginPage} />
  </BrowserRouter>
);

export default Routes;