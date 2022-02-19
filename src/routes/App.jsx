import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/global.css';

import Layout from '../Containers/Layout';
import Login from '../Containers/Login';
import RecoveryPassword from '../Containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
