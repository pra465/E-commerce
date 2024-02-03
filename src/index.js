import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetailPage from './components/ProductsDetailPage/ProductDetailPage';
import SearchPage from './components/SearchPage/SearchPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetailPage />,
      },
      {
        path: '/searchedProducts',
        element: <SearchPage />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRoute}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
