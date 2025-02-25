import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { ProjectDetail } from './pages/ProjectDetail';
import { ThemeProvider } from './ThemeContext';

export const AppRoutes = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL || '/'; // Default to '/' if not set

  return (
    <BrowserRouter basename={baseUrl}>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};
