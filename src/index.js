import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'

import routes from "routes"
import { AuthProvider } from 'auth'

import './main.scss'

ReactDOM
  .createRoot(document.querySelector('#root'))
  .render(<AuthProvider><RouterProvider router={routes} /></AuthProvider>)