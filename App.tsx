import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServicesAI from './pages/ServicesAI';
import ErrorBoundary from './components/ErrorBoundary';
import { PageRoute } from './types';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path={PageRoute.HOME} element={<Home />} />
            <Route path={PageRoute.ABOUT} element={<About />} />
            <Route path={PageRoute.AI_ANALYSIS} element={<ServicesAI />} />
            <Route path="*" element={<Navigate to={PageRoute.HOME} replace />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ErrorBoundary>
  );
};

export default App;