import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Component/Home/Home';
import Root from './Component/Root/Root';
// import Donation from './Component/Donations/Donations';
import ErrorPage from './Component/ErrorPage/ErrorPage';
// import DonationCard from './Component/DonationCard/DonationCard';
import DonationsDetails from './Component/DonationDetails/DonationsDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/donation/:id',
        element: <DonationsDetails></DonationsDetails>,
        loader: () => fetch('/donations.json')
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
