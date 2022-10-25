import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './routes/AppRoutes';
import CssBaseline from '@mui/material/CssBaseline'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline></CssBaseline>
    <AppRoutes />
  </React.StrictMode>
);