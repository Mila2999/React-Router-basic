import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
const router = createBrowserRouter([{ path: '/', element: <HomePage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
