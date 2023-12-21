import React from 'react';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
    ],
  },
]);
// const router = createBrowserRouter(routeDefinition);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
