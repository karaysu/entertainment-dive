import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'

import routes from "routes"

import './main.scss'

ReactDOM
  .createRoot(document.querySelector('#root'))
  .render(<RouterProvider router={routes} />)